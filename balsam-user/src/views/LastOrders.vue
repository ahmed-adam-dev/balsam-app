<template>
  
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    رقم الحجز
                </th>
                <th scope="col" class="py-3 px-6">
                    اسم المستشفي
                </th>
                <th scope="col" class="py-3 px-6">
                    التخصص
                </th>
                <th scope="col" class="py-3 px-6">
                    رقم الهاتف
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, count) in bookings" :key="item.id">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{item.id}}
                </th>
                <td class="py-4 px-6">
                    {{hospitals[count]?.name}}
                </td>
                <td class="py-4 px-6">
                    {{item.phone}}
                </td>
                <td class="py-4 px-6">
                    {{item.address}}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    hospitals: [],
      user: [],
      bookings : []
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
      this.bookings = res.data.data.bookings;
      this.user = res.data.data;

      const hospitalsUrl = `http://localhost:5000/api/v1/hospitals`

      const res2 = await axios.get(hospitalsUrl, config);
    //   if (res2.data.success) {
        this.hospitals = res2.data;
          console.log(this.hospitals);
    //   }
    //   this.bookings = bookRes.data

      
    },
  },
};
</script>


<style>

</style>