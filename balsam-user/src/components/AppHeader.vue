<template>
  <nav
    class="px-4 py-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >بلسم</span
        >
      </a>
      <button
      @click="mobileMenu()"
        data-collapse-toggle="mobile-menu"
        type="button"
        class="
          inline-flex
          justify-center
          items-center
          ml-3
          text-gray-400
          rounded-lg
          md:hidden
          hover:text-gray-900
          focus:outline-none focus:ring-2 focus:ring-blue-300
          dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500
        "
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden transition duration-500 ease-in-out w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="
            flex flex-col
            p-4
            mt-4
            bg-gray-50
            rounded-t-lg
            border border-gray-100
            md:flex-row
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
        <router-link to="/">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  mx-2
                  text-white
                   text-black
                  rounded
                  md:bg-transparent md: text-black md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                >الرئيسيه</a
              >
            </li>
          </router-link>
          <router-link to="/HospitalsView">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  mx-2
                  text-white
                   text-black
                  rounded
                  md:bg-transparent md: text-black md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                >المستشفيات</a
              >
            </li>
          </router-link>
          <router-link to="/CLinicsView">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  mx-2
                  text-white
                   text-black
                  rounded
                  md:bg-transparent md: text-black md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                >العيادات</a
              >
            </li>
          </router-link>    <router-link to="/IcusPage">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  mx-2
                  text-white
                   text-black
                  rounded
                  md:bg-transparent md: text-black md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                >العنايه المكثفه</a
              >
            </li>
          </router-link>
        </ul>
      </div>

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu-icons">
        <ul
          class="
            flex
            justify-center
            p-4
            bg-gray-50
            rounded-b-lg
            border border-gray-100
            flex-row
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
        <router-link to="/ProfileView">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  mx-2
                  text-white
                   text-black
                  rounded
                  md:bg-transparent md: text-black md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

                </a
              >
            </li>
          </router-link>

          <div  class="relative inline-block">
    <!-- Dropdown toggle button -->
    <button @click="toggleDropdown" class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
        <svg class="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>

    <!-- Dropdown menu -->
    <div v-if="dropdown"
        x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-100"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90" 
        class="absolute left-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
    >

        <router-link to="/LastOrders" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> حجوزاتي السابقه </router-link>
        <router-link to="/ContactPage" href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> تواصل معنا </router-link>
        <a @click="logout()" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white flex text-red-600"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
  تسجيل الخروج
         </a>

    </div>
</div>
        
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      dropdown : false
    }
  },
  methods:{
    mobileMenu(){
      let mobile = document.querySelector("#mobile-menu")
      let mobileIcons = document.querySelector("#mobile-menu-icons")
      mobile.classList.toggle("hidden")
      mobileIcons.classList.toggle("hidden")
    },
    toggleDropdown(){
      this.dropdown = !this.dropdown
    },
    async logout(){
      const token = JSON.parse(localStorage.getItem("userToken"));
      console.log(token);

      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const url = "http://localhost:5000/api/v1/auth/logout"
      const res = await axios.get(url,config)
      if(res.data.success){
        await localStorage.removeItem("userToken")
        await this.$router.push("/")
        location.reload()
      }
      console.log(res.data);
    }
  }
};
</script>

<style>
</style>