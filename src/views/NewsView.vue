<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import news from '@/assets/img/news.svg'
</script>

<template>
  <GeneralFrame titleLeft="最新" titleRight="消息">
    <div class="h-950 p-15 md:mt-15 mt-5 w-full rounded-[16px] bg-white">
      <img :src="news" alt="news" />
    </div>
  </GeneralFrame>
</template>
