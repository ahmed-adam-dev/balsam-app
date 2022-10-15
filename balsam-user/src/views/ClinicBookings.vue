<template>
  <div>
    <clinic-bookings-form />
  </div>
</template>

<script>
import ClinicBookingsForm from '@/components/ClinicBookings/ClinicBookingsForm.vue'
export default {
  components: { ClinicBookingsForm },
    created(){
        this.verify()
    },
    inject:["verify"]
}
</script>

<style>

</style>