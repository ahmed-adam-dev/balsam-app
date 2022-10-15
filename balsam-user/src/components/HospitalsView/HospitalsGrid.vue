<template>
<div>
    <loading-spinner  v-if="Loading"/>
        <div v-if="!Loading">
        <div class='max-w-md mx-auto' dir="ltr">
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>


      <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 p-8">

    <div class=" shadow rounded" v-for="item in hospitals" :key="item.id">
        <router-link :to="'/HospitalDetails/'+item.id">

        <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80" class="w-full rounded-t" alt="">
        <div class="p-4">
              <div class="flex justify-center items-center pb-4">
            <h2 class="font-bold">
               {{item.name}}
            </h2>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm font-semibold">
                النوع
            </span>
            <h2>
                {{item.type}}
            </h2>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm font-semibold">
                العيادات
            </span>
            <h2>
                5
            </h2>
        </div>
        </div>
        </router-link>
    </div>

      </div>


    </div>
    
</div>

  
</template>

<script>
import axios from "axios"
import LoadingSpinner from "../LoadingSpinner.vue"
export default {
    data() {
        return {
            hospitals: [],
            Loading:true
        };
    },
    mounted() {
        this.getHospitals();
    },
    methods: {
        async getHospitals() {
            const res = await axios.get("http://localhost:5000/api/v1/hospitals");
            this.hospitals = res.data;
            this.Loading = !this.Loading
            console.log(res.data);
        }
    },
    components: { LoadingSpinner }
}
</script>

<style>

</style>