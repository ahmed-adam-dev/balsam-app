[<template>

<form @submit.prevent="addRoom()">
    <div class="grid gap-6 mb-6 md:grid-cols-1 px-12">

        <div class="w-96">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
            <input v-model="this.name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>
   
   

  

       

        <div class="w-96">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">price</label>
            <input v-model="this.price" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>

     
 
<div>
    <button @submit="addIcu()" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>
     
    </div>

</form>


</template>

<script>
import axios from "axios"
export default {
 data(){
   return {
     hospitalId: null,
     name : "",
     resume: "",
     domain : "",
     attend : "",
     price: "",
     phone:""
   }
 },
 methods:{
   async addRoom(){
     const form = {
       hospitalId:this.hospitalId,
       name : this.name,
       price : this.price,
       status:1
     };

if(this.name == "" || this.price == ""){
  this.resAlert("error","خطاء " , "الرجاء ملء كل الحقول")
}else{
  try {
      const res = await axios.post("http://localhost:5000/api/v1/icus",form)
      if(res.data.success){
  this.resAlert("success" , "نجاح", "تمت الاضافه بنجاح" )

      }
     console.log(res.data);
  } catch (error) {
  this.resAlert("error","خطاء " , "الرجاء التحقق من الاتصال بالانترنت")
    
  }
  
}

   
   }
 },
 async created(){
   let config = {
     headers: {
       Authorization:"Bearer "+JSON.parse(localStorage.getItem("userToken")) 
     }
   }
   const resp = await axios.get("http://localhost:5000/api/v1/auth/myhospital", config)
   if (resp.data.success) {
     this.hospitalId = resp.data.data.id
   console.table(this.hospitalId);
   }
 },
 inject :["resAlert"]
}

</script>

<style>

</style>]