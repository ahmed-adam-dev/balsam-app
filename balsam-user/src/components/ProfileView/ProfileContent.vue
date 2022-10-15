<template>
  <section class="pt-16 bg-blueGray-50">
    <div class="w-full px-4 mx-auto">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          mb-6
          shadow-xl
          rounded-lg
          mt-16
        "
      >
        <div class="px-6">
          <div class="text-center mt-12">
            <h3
              class="
                text-xl
                font-semibold
                leading-normal
                mb-2
                text-blueGray-700
                mb-2
              "
            >
              {{ user.name }}
            </h3>
            <div
              class="
                text-sm
                leading-normal
                mt-0
                mb-2
                text-blueGray-400
                font-bold
                uppercase
              "
            >
              <i
                class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
              ></i>
              {{ user.address }}
            </div>
            <div class="mb-2 text-blueGray-600 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {{ user.email }}
            </div>
            <div class="mb-2 text-blueGray-600">
              <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              {{ user.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
    };
  },
  created() {
    this.getMe();
  },
  methods: {
    async getMe() {
      const token = JSON.parse(localStorage.getItem("userToken"));
      console.log(token);

      const config = {
        headers: {
          Authorization: "Bearer "+ token,
        },
      };
      const url = "http://localhost:5000/api/v1/auth/me";
      const res = await axios.get(url, config);
      console.log(res.data.data);
      this.user = res.data.data;

      if (res.data.success) {
        this.user = res.data.data;
      } else {
        this.$router.push("/LoginPage");
      }
    },
  },
};
</script>

<style>
</style>