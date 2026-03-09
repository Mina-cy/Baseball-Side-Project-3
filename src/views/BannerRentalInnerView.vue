<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import GoBack from '@/components/GoBack.vue'
import Bookmark from '@/components/Bookmark.vue'
import BannerImgContent from '@/components/BannerImgContent.vue'
import BriefIntro from '@/components/BriefIntro.vue'
import InnerSmallCard from '@/components/InnerSmallCard.vue'
import Note from '@/components/Note.vue'
</script>

<template>
  <!-- ----------背景部分--------- -->
  <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="廣告租借">
    <div class="h-690 md:mt-15 mt-5 w-full rounded-[16px] bg-white">
      <!-- 2. 內容層 -->
      <div class="relative m-auto mt-5 h-auto w-full rounded-xl bg-white p-10">
        <div class="flex items-center justify-between">
          <GoBack></GoBack>
          <Bookmark></Bookmark>
        </div>
        <BannerImgContent></BannerImgContent>
        <BriefIntro>簡介：</BriefIntro>
        <div
          class="m-auto mt-10 flex w-full flex-col justify-between md:w-[90%] md:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[90%]"
        >
          <!-- 加上 flex-1 讓兩個卡片平分剩餘空間 -->
          <InnerSmallCard>廣告位置：</InnerSmallCard>
          <InnerSmallCard>提供設備：</InnerSmallCard>
        </div>
        <Note>備注其他：</Note>
      </div>
    </div>
  </GeneralFrame>
</template>

<style scoped>
/* 徹底移除 body 預設邊距 */
body {
  margin: 0;
  padding: 0;
}
</style>
