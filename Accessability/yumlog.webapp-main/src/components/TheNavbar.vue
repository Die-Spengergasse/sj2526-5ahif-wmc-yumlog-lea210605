<template>
  <nav class="navbar navbar-expand-sm bg-miami-vice justify-content-center w-100" data-bs-theme="dark">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link fs-4 yumlog-logo" to="/">YumLog</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/recipes"><i class="bi bi-book" aria-hidden="true"></i> Rezepte</RouterLink>
        </li>
      </ul>
      <ul v-if="!authStore.isAuthenticated" class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/signup"><i class="bi bi-person-plus" aria-hidden="true"></i> Register</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/signin"><i class="bi bi-box-arrow-in-right" aria-hidden="true"></i> Login</RouterLink>
        </li>
      </ul>
      <ul v-else class="navbar-nav ms-auto">
        <li class="nav-item">
          <span class="nav-link fs-4">{{ authStore.getUser?.email }}</span>
        </li>
        <li class="nav-item">
          <button class="nav-link fs-4 btn btn-link" @click="handleLogout" aria-label="Logout">
            <i class="bi bi-box-arrow-right" aria-hidden="true"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
      try {
        await authStore.logout()
        router.push('/signin')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    }

    return {
      authStore,
      handleLogout
    }
  }
}
</script>

<style scoped>
.yumlog-logo {
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  font-weight: bold;
}

.yumlog-logo:hover {
  transform: scale(1.1);
}

.nav-link i {
  margin-right: 5px;
}
</style>