<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import FieldSvg from '@/components/FieldSvg.vue'
import baseballField from '@/assets/img/baseball-stadium.png'
</script>

<template>
  <GeneralFrame titleLeft="球場" titleRight="介紹" subTitle1="棒球場內場">
    <div
      class="md:mt-15 md:p-15 mt-5 h-auto w-full rounded-[16px] bg-white p-10"
    >
      <div class="relative flex">
        <div
          class="aspect-1/1 bg-secondary absolute -left-6 top-[50%] flex h-12 w-12 -translate-y-[50%] items-center justify-center rounded-full text-[20px] font-bold md:-left-9 md:h-16 md:w-16 md:text-[30px] lg:-left-10 lg:h-[90%] lg:w-auto lg:text-[40px]"
        >
          <p class="-translate-x-[10%]">1</p>
        </div>
        <span
          class="bg-[#D9D9D9] py-2 pl-10 pr-6 text-[20px] font-bold tracking-[5px] md:py-3 md:pl-14 md:pr-8 md:text-[30px] md:tracking-[12px] lg:text-[40px]"
          >棒球場 內場</span
        >
      </div>
      <div
        class="mb-5 flex h-auto w-full min-w-[100px] flex-col items-center md:mb-10"
      >
        <div class="relative">
          <img :src="baseballField" alt="球場平面圖" />
          <FieldSvg></FieldSvg>
        </div>
      </div>
      <p class="flex justify-end text-[12px] md:text-[20px] lg:text-[24px]">
        經緯度：E 120″41′9.1″　N 24″12′0.3″
      </p>
      <div
        class="mt-10 px-2 py-2 text-[16px] shadow-[3px_3px_5px_rgba(0,0,0,0.4)] sm:text-[24px] md:mt-20 md:px-8 md:py-6 xl:text-[22px] 2xl:text-[26px]"
      >
        <p>場地簡介：</p>
        <p class="mt-5 indent-[28px]">
          臺中市洲際棒球場，是臺灣地區首屈一指符合國際標準的棒球場，也是國內首座以美式風格為架構的棒球場，看臺視野廣闊，周邊腹地廣大，球場上方以棒球縫線為造型的景觀設計，更象徵洲際棒球場的地標性，已有多次國際級大賽在此舉辦，國際棒壘球總會特別於2013年世界青棒賽開幕典禮中，公開頒發「世界棒球之都」獎牌，以此感謝臺中市政府的卓越貢獻。
        </p>
      </div>
    </div>
  </GeneralFrame>
</template>
