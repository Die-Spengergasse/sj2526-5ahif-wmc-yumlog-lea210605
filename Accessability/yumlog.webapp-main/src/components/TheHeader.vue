<script setup>
const title = 'YumLog';
// create a slogan for yumlog
const slogan = 'Weil jedes Rezept ein Meisterwerk ist!';
</script>

<template>
  <div class="container mt-3 p-4 text-center bg-miami-vice text-white rounded">
    <p class="display-4 fw-bold" role="heading" aria-level="1">{{ title }}</p>
    <figure>
      <blockquote class="blockquote">
        <p>{{ slogan }}</p>
      </blockquote>
      <figcaption class="blockquote-footer text-white-50">
        <cite title="ChatGpt">ChatGpt</cite>
      </figcaption>
    </figure>
  </div>
</template>