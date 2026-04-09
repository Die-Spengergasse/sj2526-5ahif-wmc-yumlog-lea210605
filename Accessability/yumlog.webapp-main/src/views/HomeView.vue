<script setup>
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section mt-3 text-center d-flex align-items-center">
      <div class="container">
        <h1 class="display-3 fw-bold">Willkommen bei YumLog</h1>
        <p class="lead">Entdecke, speichere und teile deine Lieblingsrezepte.</p>
        <RouterLink to="/recipes" class="btn btn-lg btn-primary">Rezepte entdecken</RouterLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container my-3">
      <h2 class="visually-hidden">Unsere Features</h2>
      <div class="row text-center">
        <div class="col-md-4">
          <i class="bi bi-search-heart fs-1 text-primary" aria-hidden="true"></i>
          <h3>Rezepte entdecken</h3>
          <p>Durchstöbere eine umfangreiche Sammlung köstlicher Rezepte.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-bookmark-heart fs-1 text-success" aria-hidden="true"></i>
          <h3>Favoriten speichern</h3>
          <p>Speichere deine Lieblingsrezepte und greife jederzeit darauf zu.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-pencil-square fs-1 text-danger" aria-hidden="true"></i>
          <h3>Rezepte teilen</h3>
          <p>Lade deine eigenen Rezepte hoch und teile sie mit der Community.</p>
        </div>
      </div>
    </section>

    <!-- Random Recipe Section -->
    <!-- TODO: Random Recipe Section -->
  </div>
</template>

