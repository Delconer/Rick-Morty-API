<template>
  <div class="pages-menu">

        <router-link
          :to="{query: {page: 1}}"
          class="btn-pages text-center"
          v-if="actualPage>1"
          >
          First
        </router-link>
        <router-link
          :to="{query: {page: actualPage - 1}}"
          class="btn-pages text-center"
          v-if="actualPage>1 && actualPage<info.pages +1"
          >
          Previous
        </router-link>
      <router-link
        :to="{query: {page: actualPage + 1}}"
        class="btn-pages text-center"
        v-if="actualPage < info.pages"
      >
        Next
      </router-link>
  </div> 
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Pagination',
  data() {
    return {
      actualPage: ''
    }
  },
  computed:{
    ...mapState(['info']),
  },
  watch: {
    "$route.query.page": {
      immediate: true,
      handler(page){
        page = parseInt(page) || 1
          this.obtenerPersonajes(page)
          this.actualPage = page
      }
    }
  },
  methods:{
    ...mapActions(['obtenerPersonajes'])
  }
}
</script>
