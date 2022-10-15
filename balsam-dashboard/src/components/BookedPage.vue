/* eslint-disable */
<template>
  <div class="flex flex-col justify-center items-center space-y-4">
    

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
                <tr :key="item.id" v-for="item in bookings">
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
          bookings : []
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
            this.bookings = resp2.data.bookings;
            console.log(this.bookings);
        
  }
}


</script>

<style></style>
