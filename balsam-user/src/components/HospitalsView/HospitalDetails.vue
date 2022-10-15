<template>
  <div>
    <loading-spinner v-show="Loading" />
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
                {{ hospital.name }}
              </h1>

              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ hospital.address }}
              </p>
            </div>
          </div>

          <div
            class="
              flex
              items-center
              justify-center
              w-full
              mt-6
              lg:mt-0 lg:w-1/2
            "
          >
            <img
              class="w-full h-full lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
      <h2
        class="
          text-xl
          font-semibold
          text-gray-800
          uppercase
          dark:text-white
          lg:text-3xl
        "
      >
        غرف العنايه المكثفه المتوفرة :
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
        <div class="icus-rooms" v-for="item in hospital.icus" :key="item.id">
          <div class="shadow rounded p-4" v-if="item.status == 1">
            <div class="p-4">
              <div class="flex justify-center items-center pb-4">
                <h2 class="font-bold">
                  {{ item.name }}
                </h2>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm font-semibold"> السعر </span>
                <h2>
                  {{ item.price }}
                </h2>
              </div>
              <router-link :to="`/IcuBooked/${item.id}`">
                <button
                  class="
                    w-full
                    tracking-wider
                    px-6
                    py-2.5
                    mt-6
                    text-sm text-white
                    uppercase
                    transition-colors
                    duration-300
                    transform
                    bg-blue-600
                    rounded-md
                    lg:w-auto
                    hover:bg-blue-500
                    focus:outline-none focus:bg-blue-500
                  "
                >
                  احجز الان
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bookings">
        <h2 class="text-center font-semibold">العيادات</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 p-8 gap-4">
          <div
            class="shadow rounded"
            v-for="item in hospital.clinics"
            :key="item"
          >
            <router-link :to="`/ClinicDetails/${item.id}`">
              <div class="p-4">
                <div class="flex justify-center items-center pb-4">
                  <h2 class="font-bold">{{ item.name }}</h2>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-semibold"> الزمن </span>
                  <h2>{{ item.attend }}</h2>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-semibold"> الرسوم </span>
                  <h2>{{ item.price }} ج.س</h2>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  data() {
    return {
      hospital: [],
      Loading: true,
    };
  },
  created() {
    this.getHospital();
  },
  methods: {
    async getHospital() {
      const id = this.$route.params.id;
      const url = `http://localhost:5000/api/v1/hospitals/${id}`;
      const res = await axios.get(url);
      this.hospital = res.data;
      this.Loading = !this.Loading;
      console.log(this.hospital);
    },
  },
};
</script>

<style>
</style>