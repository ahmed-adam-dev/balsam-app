<template>
  <app-header />
  <router-view/>
  
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
    components: { AppHeader },
    methods:{
      verify(){
        if(!localStorage.getItem("userToken")){
          this.$router.push("/LoginView")
        }
      },
      responseAlert(icon,title,text){
        this.$swal.fire({
  icon: icon,
  title: title,
  text: text,
  buttonText:"تم"
})

      }
    },
 
    provide(){
      return {
        verify : this.verify,
        responseAlert : this.responseAlert
      }
    }
}
</script>
<style>




nav li {
  font-weight: bold;
}

</style>
