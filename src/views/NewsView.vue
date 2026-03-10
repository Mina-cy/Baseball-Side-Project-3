<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import news from '@/assets/img/news.svg'
import NewActivities from '@/components/NewActivities.vue'
</script>

<template>
  <GeneralFrame titleLeft="最新" titleRight="消息">
    <div class="mt-5 h-950 w-full rounded-[16px] bg-white p-5 lg:p-15 md:mt-15">

      <NewActivities></NewActivities>
    </div>
  </GeneralFrame>
</template>
