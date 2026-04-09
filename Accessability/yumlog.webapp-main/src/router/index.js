import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth'

// Lazy load other views for better performance
const NotFoundView = () => import('../views/NotFoundView.vue')
const RecipesView = () => import('@/views/RecipesView.vue')
const RecipeDetailsView = () => import('@/views/RecipeDetailsView.vue')
const AddRecipeView = () => import('@/views/AddRecipeView.vue')
const SignUpView = () => import('@/views/SignUpView.vue')
const SignInView = () => import('@/views/SignInView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView
    },
    {
      path: '/recipes/:id',
      name: 'recipeDetails',
      component: RecipeDetailsView
    },
    {
      path: '/recipes/add',
      name: 'addRecipe',
      component: AddRecipeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authStore.isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

// Focus management after route change for accessibility
router.afterEach((to, from) => {
  // Focus the main content after navigation for keyboard and screen reader users
  setTimeout(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#app')
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1')
      mainContent.focus()
      // Update document title for better screen reader announcement
      document.title = `${to.name ? to.name.charAt(0).toUpperCase() + to.name.slice(1) : 'YumLog'} - YumLog`
    }
  }, 100)
})

export default router
