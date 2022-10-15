<template>
  <div>
    <profile-content />
    
  </div>
</template>

<script>
import ProfileContent from '@/components/ProfileView/ProfileContent.vue'
export default {
components : {ProfileContent},
created (){
  this.verify()
},
inject:["verify"]
}
</script>

<style>

</style>
