<script setup>
import { onMounted, ref, computed } from 'vue';
import RecipeList from '../components/RecipeList.vue';
import { recipeService } from '../services/recipeService.js';
import { recipes as demoRecipes } from '../assets/temp-data.js';

const recipes = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const selectedCategory = ref('all');
const error = ref(null);

// Performance: Memoized gefilterte Rezepte
const filteredRecipes = computed(() => {
  let result = recipes.value;
  
  // Filter nach Suchbegriff
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(recipe => 
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query)
    );
  }
  
  return result;
});

// Lade Rezepte von Backend API
async function fetchRecipes() {
  isLoading.value = true;
  error.value = null;
  
  try {
    // Versuche von Backend API zu laden
    const data = await recipeService.getRecipes();
    recipes.value = data;
    console.log('Loaded recipes from API:', recipes.value);
  } catch (err) {
    console.error('Failed to load recipes from API, using demo data:', err);
    // Fallback auf Demo-Daten wenn API nicht verfügbar
    recipes.value = demoRecipes;
    error.value = 'Using demo data (API not available)';
  } finally {
    isLoading.value = false;
    prefetchDetailRoutes();
  }
}

// Prefetching für bessere Navigation
function prefetchDetailRoutes() {
  // Prefetch die ersten 3 Rezept-Details im Hintergrund
  if (recipes.value.length > 0) {
    recipes.value.slice(0, 3).forEach(recipe => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/recipes/${recipe.id}`;
      document.head.appendChild(link);
    });
  }
}

onMounted(() => {
  fetchRecipes();
});

</script>

<template>
  <div class="recipes-view">
    <div class="container mt-3">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="mb-2">Alle Rezepte</h1>
          <p class="text-muted" v-if="!isLoading">{{ filteredRecipes.length }} Rezepte gefunden</p>
        </div>
        <router-link to="/recipes/add" class="btn btn-primary">
          <i class="bi bi-plus" aria-hidden="true"></i> Rezept hinzufügen
        </router-link>
      </div>
      
      <!-- Search Bar für bessere UX (optional) -->
      <div class="search-bar mb-4" v-if="!isLoading">
        <input 
          type="search" 
          v-model="searchQuery"
          class="form-control"
          placeholder="Rezepte durchsuchen..."
          aria-label="Rezepte durchsuchen"
        >
      </div>
    </div>
    
    <div class="container">
      <!-- Loading skeleton -->
      <div v-if="isLoading" class="row recipes-grid">
        <div class="col-md-4 col-sm-6 mb-4" v-for="n in 6" :key="n">
          <div class="card h-100 placeholder-glow">
            <div class="placeholder-image"></div>
            <div class="card-body">
              <h2 class="card-title h5 placeholder col-8"></h2>
              <p class="card-text placeholder col-12"></p>
              <p class="card-text placeholder col-6"></p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Actual recipe list -->
      <RecipeList v-else :recipes="filteredRecipes" />
      
      <!-- Empty State -->
      <div v-if="!isLoading && filteredRecipes.length === 0" class="text-center py-5">
        <i class="bi bi-search fs-1 text-muted"></i>
        <p class="text-muted mt-3">Keine Rezepte gefunden.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Performance: GPU-Beschleunigung für Grid */
.recipes-grid {
  transform: translateZ(0);
  will-change: contents;
}

.search-bar {
  max-width: 500px;
}

.recipes-view {
  /* Prevent layout shift */
  min-height: 100vh;
}
</style>