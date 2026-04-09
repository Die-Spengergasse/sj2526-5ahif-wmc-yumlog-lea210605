<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  recipe: {
    type: Object,
    required: true
  }
});

const imageRef = ref(null);
const isVisible = ref(false);
const imageLoaded = ref(false);

// Memoized image URL berechnung
const imageUrl = computed(() => {
  const url = props.recipe?.imageUrl;
  if (!url) {
    return 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop';
  }
  if (url.startsWith('http')) {
    return url;
  }
  return `http://localhost:3000${url}`;
});

// Intersection Observer für smartes Lazy Loading
let observer = null;

onMounted(() => {
  if ('IntersectionObserver' in window && imageRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            // Prefetch beim Annähern (rootMargin)
            if (observer) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before visible
        threshold: 0.01
      }
    );
    observer.observe(imageRef.value);
  } else {
    // Fallback für Browser ohne IntersectionObserver
    isVisible.value = true;
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const handleImageLoad = () => {
  imageLoaded.value = true;
};
</script>

<template>
  <div class="card h-100 mb-4 shadow-sm recipe-card" ref="imageRef">
    <div class="recipe-image-wrapper">
      <!-- Progressive Image Loading mit Intersection Observer -->
      <img 
        v-if="isVisible"
        :src="imageUrl" 
        class="img-fluid rounded recipe-image"
        :class="{ 'image-loaded': imageLoaded }"
        :alt="`Rezeptbild: ${recipe?.title} - leckeres Gericht mit ${recipe?.duration} Minuten Zubereitungszeit`" 
        loading="lazy" 
        width="800" 
        height="600" 
        decoding="async"
        @load="handleImageLoad"
      >
      <!-- Placeholder während Bild lädt -->
      <div v-else class="image-placeholder"></div>
    </div>
    <div data-test="recipe-item" class="card-body">
      <h2 data-test="recipe-title" class="card-title">{{ recipe.title }}</h2>
      <p class="card-text text-truncate-2">{{ recipe.description }}</p>
      <p class="card-text"><i class="bi bi-clock" aria-hidden="true"></i> {{ recipe.duration }} Minuten</p>
      <RouterLink 
        :to="`/recipes/${recipe.id}`" 
        data-test="details-button" 
        class="btn btn-primary btn-sm w-100"
        :aria-label="`Details zu ${recipe.title} ansehen`"
      >
        Details ansehen
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Smooth Image Loading Transition */
.recipe-image {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.recipe-image.image-loaded {
  opacity: 1;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

/* Text truncation für konsistente Kartenhöhe */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  max-height: 3em;
}

/* Optimierte Card Performance */
.recipe-card {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.recipe-card:hover {
  transform: translateY(-5px);
  transition: transform 0.2s ease-in-out;
}

h2.card-title {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>