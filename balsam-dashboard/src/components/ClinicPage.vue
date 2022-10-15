/* eslint-disable */
<template>
  <div class="flex flex-col justify-center items-center space-y-4">
    
    <router-link to="/AddClinic" class="py-4">
          <button class="bg-blue-600 text-white font-semibold rounded p-4">
               أضف عيادة جديده 
          </button>

    </router-link>


<div class="overflow-x-auto relative w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6 font-bold">
                    اسم الطبيب
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                    الزمن
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                  السعر 
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                    رقم التلفون
                </th>
            </tr>
                <tr :key="item.id" v-for="item in clinics">
                                    <th scope="col" class="py-3 px-6 font-bold">
                    {{item.name}}
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                    {{item.attend}}
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                 {{item.price}}
                </th>
                <th scope="col" class="py-3 px-6 font-bold">
                    {{item.phone}}
                </th>
                </tr>
        </thead>
    </table>
</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
      return {
          clinics : []
      }
  },

  async created(){
      let config = {
           headers: {
       Authorization:"Bearer "+JSON.parse(localStorage.getItem("userToken")) 
     }
   }
      const resp = await axios.get("http://localhost:5000/api/v1/auth/myhospital", config);

      const resp2 = await axios.get("http://localhost:5000/api/v1/hospitals/"+resp.data.data.id);
        if (resp2.status == 200) {
            this.clinics = resp2.data.clinics;
            console.log(this.icus);
        }
  }
}


</script>

<style></style>
