/* eslint-disable */
<template>
  <div class="w-full">
    <home-page />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "../components/HomePage.vue";
export default {
  name: "Home",
  components: {
    HomePage,
  },
  methods:{
        resAlert(icon,title,text){
      this.$swal.fire({
  icon: icon,
  title: title,
  text: text
})
    }
  },
    provide(){
    return {
      resAlert : this.resAlert
    }
  }
};
</script>
