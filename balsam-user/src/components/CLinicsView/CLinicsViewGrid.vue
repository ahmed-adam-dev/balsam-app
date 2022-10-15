<template>
    <div class="bookings">
      <h2 class="text-center font-semibold">العيادات</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 p-8 gap-4">
        <div class="shadow rounded" v-for="item in clinic" :key="item.id">
            <router-link :to="`/ClinicDetails/${item.id}`">
                <div class="p-4">
            <div class="flex justify-center items-center pb-4">
              <h2 class="font-bold">{{item.name}}</h2>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm font-semibold"> الزمن </span>
              <h2>{{item.attend}}</h2>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm font-semibold"> الرسوم </span>
              <h2>{{item.price}} ج.س</h2>
            </div>
          </div>
            </router-link>
        
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            clinic : []
        }
    },
    created(){
        this.getClinic()
    },
    methods:{
        async getClinic(){
            const url = "http://localhost:5000/api/v1/clinics"
            const res = await axios.get(url)
            this.clinic = res.data
        }
    }
}
</script>

<style>

</style>