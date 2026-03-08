<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import FieldSvg from "@/components/FieldSvg.vue"
import baseballField from "@/assets/img/baseball-stadium.png"

</script>

<template>
  <GeneralFrame titleLeft="球場" titleRight="介紹" subTitle1="棒球場內場">
    <div class="w-full p-10 md:p-15 bg-white h-auto rounded-[16px]">
      <div class="relative flex">
        <div class="w-12 md:w-16 lg:w-auto
					h-12 md:h-16 lg:h-[90%]
					aspect-1/1 top-[50%] -translate-y-[50%]
					flex items-center justify-center rounded-full bg-secondary font-bold 
					text-[20px] md:text-[30px] lg:text-[40px]  absolute 
					-left-6 md:-left-9 lg:-left-10 ">
          <p class="-translate-x-[10%]">1</p>
        </div>
        <span class="text-[20px] md:text-[30px] lg:text-[40px] 
					bg-[#D9D9D9] font-bold 
					pl-10 md:pl-14 
					pr-6 md:pr-8 
					py-2 md:py-3 tracking-[5px] md:tracking-[12px] 
					">棒球場 內場</span>
      </div>
      <div class="w-full mb-5 md:mb-10 min-w-[100px] h-auto flex flex-col items-center">

        <div class="relative">
          <img :src="baseballField" alt="球場平面圖">
          <FieldSvg></FieldSvg>
        </div>
      </div>
      <p class="flex justify-end text-[12px] md:text-[20px] lg:text-[24px]">經緯度：E 120″41′9.1″　N 24″12′0.3″</p>
      <div
        class="mt-10 md:mt-20 px-2 md:px-8 py-2 md:py-6 shadow-[3px_3px_5px_rgba(0,0,0,0.4)] text-[16px] sm:text-[24px] xl:text-[22px] 2xl:text-[26px]">
        <p>場地簡介：</p>
        <p class="indent-[28px] mt-5">
          臺中市洲際棒球場，是臺灣地區首屈一指符合國際標準的棒球場，也是國內首座以美式風格為架構的棒球場，看臺視野廣闊，周邊腹地廣大，球場上方以棒球縫線為造型的景觀設計，更象徵洲際棒球場的地標性，已有多次國際級大賽在此舉辦，國際棒壘球總會特別於2013年世界青棒賽開幕典禮中，公開頒發「世界棒球之都」獎牌，以此感謝臺中市政府的卓越貢獻。
        </p>
      </div>
    </div>
  </GeneralFrame>

</template>

<style scoped></style>