[
<template>
  <div class="flex" v-if="token!=null">
    <app-header />
    <router-view />
  </div>
  <div v-else>
    <login-page></login-page>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginPage from "./components/LoginPage.vue"
export default {
  components: { AppHeader, LoginPage },
  data() {
    return {
      token: localStorage.getItem("userToken")
    }
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
<style>

</style>

