<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import RecipeItemDetails from '../components/RecipeItemDetails.vue';
import { recipes as demoRecipes } from '../assets/temp-data.js';

const route = useRoute();

const recipe = ref({});
const isLoading = ref(true);

const fetchRecipe = async () => {
  const id = route.params.id;
  // Using demo data instead of API
  recipe.value = demoRecipes.find(r => r.id === id) || {};
  console.log('Loaded recipe:', recipe.value);
  isLoading.value = false;
};

onMounted(() => {
  fetchRecipe();
});
</script>

<template>
  <div class="container mt-3">
    <!-- Loading skeleton -->
    <div v-if="isLoading" class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card h-100 placeholder-glow">
          <div class="placeholder-image-detail"></div>
          <div class="card-body">
            <h1 class="card-title h4 placeholder col-8"></h1>
            <p class="card-text placeholder col-12"></p>
            <p class="card-text placeholder col-6"></p>
            <div class="placeholder col-12" style="height: 200px;"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Actual recipe details -->
    <RecipeItemDetails v-else :recipe="recipe" />
  </div>
</template>