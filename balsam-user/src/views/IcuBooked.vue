<template>
    <div>
        <IcuBooked />
    </div>
</template>

<script>
import IcuBooked from '@/components/IcusPage/IcuBooked.vue'
export default {
  components: { IcuBooked },
  created(){
        this.verify()
    },
    inject:["verify"]
}
</script>