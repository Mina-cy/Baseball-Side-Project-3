<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.back(); 

};
</script>

<template>
  <div 
    @click="goBack" 
    class="w-[180px] flex justify-center items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
  >
    <i class="fa-solid fa-arrow-left font-bold"></i>
    <span class="text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold">Go Back</span>
  </div>
</template>


