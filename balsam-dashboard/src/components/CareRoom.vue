/* eslint-disable */
<template>
  <div class="flex flex-col justify-center items-center space-y-4">
    
    <router-link to="/AddIcu" class="py-4">
          <button class="bg-blue-600 text-white font-semibold rounded p-4">
               أضف غرفه جديده 
          </button>

    </router-link>


<div class="overflow-x-auto relative w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6 font-bold">
                    رقم الغرفه
                </th>
             
                <th scope="col" class="py-3 px-6 font-bold">
                  السعر 
                </th>
             
            </tr>
                <tr :key="icu.id" v-for="icu in icus">
                                    <th scope="col" class="py-3 px-6 font-bold">
                    {{icu.name}}
                </th>
             
                <th scope="col" class="py-3 px-6 font-bold">
                 {{icu.price}}
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
          icus : []
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
            this.icus = resp2.data.icus;
            console.log(this.icus);
        }
  }
}


</script>

<style></style>
