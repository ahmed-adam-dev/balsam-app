<template>
    <div>
      <loading-spinner  v-show="Loading"/>
        <section v-show="!Loading">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1
                class="
                  text-2xl
                  font-semibold
                  text-gray-800
                  uppercase
                  dark:text-white
                  lg:text-3xl
                "
              >
                {{ clinic.name }}
              </h1>
              <h1
                class="
                  text-2xl
                  font-semibold
                  text-gray-800
                  uppercase
                  dark:text-white
                  lg:text-3xl
                "
              >
                {{ clinic.domain }}
              </h1>
  
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ clinic.address }}
              </p>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ clinic.resume }}
              </p>
              <router-link :to="`/ClinicBookings/${clinic.id}`"> 
            <div class="text-center">
                <button type="button" class="text-white bg-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 font-bold">احجز</button>
            </div>
        </router-link>
            </div>
          </div>
  
          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-full h-full lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    
    </section>
    </div>
  
  </template>
  
  <script>
  import axios from "axios";
  import LoadingSpinner from '../LoadingSpinner.vue';
  export default {
    components: { LoadingSpinner },
    data() {
      return {
        clinic: [],
        Loading : true
      };
    },
    created() {
      this.getHospital();
    },
    methods: {
      async getHospital() {
        const id = this.$route.params.id;
        const url = `http://localhost:5000/api/v1/clinics/${id}`;
        const res = await axios.get(url);
        this.clinic = res.data;
        this.Loading = !this.Loading
        console.log(this.hospital);
      },
    },
  };
  </script>
  
  <style>
  </style>