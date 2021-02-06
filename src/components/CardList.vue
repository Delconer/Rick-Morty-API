<template>
  <div>
    <div class="container">
      <div class="card-list text-center">
        <div v-for="(personaje, index) in personajes" :key="index">
          <Card :personaje="personaje" />
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";
export default {
  components: { Card, Pagination },
  computed: {
    ...mapState(["personajes"]),
  },
  methods: {
    ...mapActions(["obtenerPersonajes"]),
  },
};
</script>
