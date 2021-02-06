<template>
  <div class="card">
    <img :src="personaje.image" alt="avatar del personaje" class="card-img" />
    <div class="card-title">
      <h3 class="text-center">
        {{ personaje.name }} <span class="status">{{ personaje.status }}</span>
      </h3>
    </div>
    <div class="card-body">
      <p class="card-text text-center">
        {{ personaje.species }} - {{ personaje.gender }}
      </p>
      <p class="card-text text-center">
        <b>Origin:</b> {{ personaje.origin.name }}
      </p>
      <p class="card-text text-center">
        <b>Last known location:</b> {{ personaje.location.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["personaje"],
};
</script>
