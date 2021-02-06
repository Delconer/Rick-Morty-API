<template>
  <div class="site-search">
    <div class="container">
        <form class="search-flex"  @submit.prevent="requestSearch()">
          <input type="text" class="search-input" placeholder="Search by name..." v-model="text">
          <button class="search-btn" type="submit">Search</button>
          <button class="search-btn" @click.prevent="resetSearch()">Reset</button>
        </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      text: ''
    }
  },
  methods:{
    ...mapActions(['updateSearch','obtenerPersonajes']),
    requestSearch(){
      this.updateSearch(this.text)
      this.obtenerPersonajes(1)
    },
    resetSearch(){
      this.updateUrl()
      this.text = ''
      this.updateSearch(this.text)
      this.obtenerPersonajes(1)
    },
    updateUrl(){
      const querystring = window.location.search
      const params = new URLSearchParams(querystring)
      params.set('page', 1)
      params.toString()
      window.location.search= `?${params}`
    }
  },
}
</script>
