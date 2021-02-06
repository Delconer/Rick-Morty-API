<template>
  <div>
    <div class="site-title text-center">
      <router-link to="/" class="site-title-router">
        <h1>Rick & Morty</h1>
        <p>Characters guide</p>
      </router-link>
    </div>
    <Search />
    <CardList />
  </div>
</template>

<script>
import CardList from "../components/CardList";
import Search from "../components/Search";
export default {
  name: "Home",
  components: {
    CardList,
    Search,
  },
};
</script>
