<template>
  <div class="home">
    <loading-spinner v-show="!Loading" />
    <home-hero v-show="Loading" />
    <home-service v-show="Loading" />
  </div>
</template>

<script>
import HomeHero from '@/components/HomeView/HomeHero.vue'
import HomeService from '@/components/HomeView/HomeService.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  name: 'HomeView',
  data(){
    return {
      Loading:false
    }
  },
  created(){
    setTimeout(() => {
      this.Loading = !this.Loading
    }, 2000);
  },
  components: {
    HomeHero,
    HomeService,
    LoadingSpinner
}
}
</script >
