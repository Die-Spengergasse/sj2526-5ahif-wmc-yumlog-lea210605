<script setup>
import { computed } from 'vue';
import RecipeItem from './RecipeItem.vue';

const props = defineProps({
  recipes: {
    type: Array,
    required: true
  }
});

// Performance: Memoized key generation
const recipeKeys = computed(() => 
  props.recipes.map(recipe => recipe.id)
);
</script>

<template>
  <div class="recipe-list-grid">
    <div 
      v-for="recipe in recipes" 
      :key="recipe.id"
      class="recipe-list-item"
    >
      <RecipeItem :recipe="recipe" />
    </div>
  </div>
</template>

<style scoped>
/* CSS Grid für bessere Performance als Bootstrap Grid */
.recipe-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  /* GPU Acceleration */
  transform: translateZ(0);
  will-change: contents;
}

/* Responsive optimizations */
@media (max-width: 768px) {
  .recipe-list-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .recipe-list-grid {
    grid-template-columns: 1fr;
  }
}

.recipe-list-item {
  /* Prevent layout shift during render */
  contain: layout style;
}
</style>