<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import FieldInnerSvg from '@/components/FieldInnerSvg.vue'
</script>

<template>
  <GeneralFrame titleLeft="球場" titleRight="介紹" subTitle1="棒球場外圍">
    <div
      class="md:mt-15 md:p-15 mt-5 h-auto w-full rounded-[16px] bg-white p-8"
    >
      <div class="mb-5 flex h-auto w-full min-w-[100px] flex-col md:mb-10">
        <div class="relative flex">
          <div
            class="aspect-1/1 bg-secondary absolute -left-6 top-[50%] flex h-12 w-12 -translate-y-[50%] items-center justify-center rounded-full text-[20px] font-bold md:-left-9 md:h-16 md:w-16 md:text-[30px] lg:-left-10 lg:h-[90%] lg:w-auto lg:text-[40px]"
          >
            <p>2</p>
          </div>
          <span
            class="bg-[#D9D9D9] py-2 pl-10 pr-6 text-[20px] font-bold tracking-[5px] md:py-3 md:pl-14 md:pr-8 md:text-[30px] md:tracking-[12px] lg:text-[40px]"
            >棒球場 外圍</span
          >
        </div>
        <div class="relative mt-5 md:mt-10">
          <FieldInnerSvg></FieldInnerSvg>
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
          洲際棒球場周邊辦公室坐落於完善的運動與商業機能圈內，鄰近大型活動場地與主要交通動線，環境開闊、機能成熟。結合辦公、休閒與生活便利性，適合企業設點、團隊進駐，在活絡氛圍中打造高效且具特色的工作空間。
        </p>
      </div>
    </div>
  </GeneralFrame>
</template>
