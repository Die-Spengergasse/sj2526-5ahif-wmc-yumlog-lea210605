<script setup>
defineProps(
  {
    recipe: {
      type: Object,
      required: true
    }
  }
);

const getImageUrl = (imageUrl) => {
  if (!imageUrl) {
    return 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop'; // placeholder food image
  }
  // If it's already a full URL (starts with http), use it directly
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  // Otherwise, it's a backend path
  const backendUrl = "http://localhost:3000";
  return `${backendUrl}${imageUrl}`;
};
</script>

<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card h-100">
        <div class="recipe-detail-image-wrapper">
          <img :src="getImageUrl(recipe?.imageUrl)" class="img-fluid rounded" :alt="`Rezeptbild: ${recipe?.title} - Detailansicht des Gerichts mit Zutaten und Zubereitung`" loading="eager" width="800" height="600" decoding="async">
        </div>
        <div class="card-body">
          <h1 data-test="detail-title" class="card-title">{{ recipe?.title }}</h1>
          <p class="card-text">{{ recipe?.description }}</p>
          <p class="card-text"><strong>Dauer:</strong> {{ recipe?.duration }} minutes</p>
          <!-- add the ingredients -->
          <h2 class="card-text"><strong>Zutaten:</strong></h2>
          <ul data-test="ingredients-list" class="list-group">
            <li class="list-group-item" v-for="ingredient in recipe?.ingredients" :key="ingredient">
              <div class="d-flex justify-content-start">
                <div class="p-2 w-25">{{ ingredient.name }}</div>
                <div class="p-2">{{ ingredient.amount }}</div>
              </div>
            </li>
          </ul>
          <!-- add the instruction -->
          <h2 class="card-text"><strong>Zubereitung:</strong></h2>
          <p class="card-text">{{ recipe?.instructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1.card-title {
  font-size: 1.5rem;
  font-weight: 500;
}

h2.card-text {
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1rem;
}
</style>