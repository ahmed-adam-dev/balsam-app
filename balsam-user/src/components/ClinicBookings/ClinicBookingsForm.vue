<template>
    <!-- component -->
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form @submit.prevent="booking()" >
  
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            العنوان
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="العنوان"
            v-model="address"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
           رقم الهاتف
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="رقم الهاتف"
            v-model="phone"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            أرسل
          </button>
        </div>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data(){
      return {
        address:"",
        phone : "",
        hospitalId : ""
      }
    },
    created(){
      this.getHospitalId()
    },
    methods:{
      async getHospitalId(){
        const id = this.$route.params.id
        const url = `http://localhost:5000/api/v1/icus/${id}`
        const res = await axios.get(url)
        this.hospitalId = res.data.hospital.id
      },
      async booking(){
        const token = localStorage.getItem("userToken");
        console.log(token);
  
        const config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        const bookingData = {
          hospitalId : this.hospitalId,
          clinicId: this.$route.params.id,
          userId : 1,
          phone:this.phone,
          address : this.address
        }
        if(
          this.phone == "" || this.address == ""
        ){
          this.responseAlert("error","خطاء" ,"الرجاء ملء كل الحقول")
          return
        }else{
          try {
            const url = "http://localhost:5000/api/v1/appointments"
        const res = await axios.post(url,bookingData,config)
        console.log(res.data);
        if(res.data.success){
          this.responseAlert("success","نجاح" ,"تم استلام طلبك بنجاح ")
        }else{
          this.responseAlert("error","خطاء" ," الرجاء التحقق من الاتصال بالانترنت  ")
  
        }
          } catch (error) {
          this.responseAlert("error","خطاء" ," الرجاء التحقق من الاتصال بالانترنت  ")
            
          }
        }
       
      }
    },
    inject:["responseAlert"]
  }
  </script>