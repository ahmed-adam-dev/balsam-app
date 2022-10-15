<template>
      <section class="hero">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 md:px-24 px-4 items-center">
            <div class="md:col-span-2 py-4">
                <h2 class="text-xl sm:text-4xl md:text-5xl font-bold py-2">
             بلسم  ... دليلك لرعاية أفضل  
                </h2>
                <p class="text-gray-500 py-2">
                 موقع بلسم إحدى الأفكار المبتكرة التي تُتيح لمستخدميه خدمة البحث والتواصل وحجز موعد مع أفضل الأطباء ذوي الخبرة والثقة في قطاع المستشفيات الحكومي والخاص وفقا لإحتياجتهم ، وأيضا حجز غرفتك داخل المستشفي .
                </p>
                <div class="flex py-2">
                    <router-link to="/HospitalsView"> 
            <div class="text-center">
                <button type="button" class="text-white bg-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 font-bold">احجز</button>
            </div>
        </router-link>
                </div>

           
             
            </div>

         
            <div class="rounded-xl p-8 ">
                <img src="https://images.unsplash.com/photo-1605654580413-5a7f24649936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="w-full" alt="" />
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>