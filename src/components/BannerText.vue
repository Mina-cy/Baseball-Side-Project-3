<script setup>
import BannerText from '@/assets/img/banner-text.svg'
</script>

<template>
  <div
    class="absolute 
    bottom-[2%] sm:bottom-[2%] md:bottom-[10%] lg:bottom-[8%] xl:bottom-[9%] 2xl:bottom-[10%]
    left-3 md:left-5
    z-10 px-2 "
  >
    <img
      :src="BannerText"
      alt="洲際棒球場標題"
      class="h-auto w-[98%] md:min-w-[650px] lg:w-[75%] xl:w-[78%] 2xl:w-[80%]"
    />
  </div>
</template>

<style scoped></style>
