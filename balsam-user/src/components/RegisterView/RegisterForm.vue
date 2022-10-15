<template>
  <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  انشيء حساب
              </h1>
              <form @submit.prevent="register()" class="space-y-4 md:space-y-6" action="#">
                <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الايميل</label>
                      <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  >
                  </div>
                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الهاتف</label>
                      <input v-model="phone" type="tel" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone"  >
                  </div>
                  <div>
                      <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العنوان</label>
                      <input v-model="address" type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address"  >
                  </div>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم</label>
                      <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name"  >
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمه السر</label>
                      <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                  </div>
               
                 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      لديك حساب بالفعل ؟ 
                      <router-link to="/LoginView">
                         تسجيل الدخول
                      </router-link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            name :"",
            email : "" , 
            phone : "",
            address  :"",
            password : "",
        }
    },
    methods:{
        async register(){
            const registerForm = {
                name :this.name,
            email : this.email, 
            phone : this.phone,
            address  :this.address,
            password : this.password,
            }
            if(
                this.name=="" || this.email=="" || this.phone=="" || this.address=="" || this.password=="" 
            ){
                this.responseAlert("error","خطاء" , "الرجاء ملء كل الحقول")
            }else{
                try{
                    const url = "http://localhost:5000/api/v1/auth/register"
            const res = await axios.post(url,registerForm)
            if(
                res.data.success
            ){
                this.responseAlert("success","نجاح" , "   تم تسجيل الحساب بنجاح")
                localStorage.setItem("userToken",JSON.stringify(res.data.token))

this.$router.push("/");
            }else{
                this.responseAlert("error","خطاء" , " حدث خطاء ما الرجاء التحقق من الاتصال بالانترن ")
            }
                }catch(error){
                    if(error.response.data.error == "user with this email, already exist"){
                this.responseAlert("error","خطاء" , "  المستخدم موجود بالفعل")

            }else{
                this.responseAlert("error","خطاء" , " حدث خطاء ما الرجاء التحقق من الاتصال بالانترن ")

            }

                }
            }

        }
    },
    inject : ["responseAlert"]
}
</script>

<style>

</style>