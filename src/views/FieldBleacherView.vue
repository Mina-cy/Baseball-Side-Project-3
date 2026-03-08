<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import FieldInnerSvg from "@/components/FieldInnerSvg.vue"

</script>

<template>
  <GeneralFrame titleLeft="球場" titleRight="介紹" subTitle1="棒球場外圍">
    <div class="w-full p-8 md:p-15 bg-white h-auto rounded-[16px]">
       <div class="w-full mb-5 md:mb-10 min-w-[100px] h-auto flex flex-col">
        <div class="relative flex">
        <div class="w-12 md:w-16 lg:w-auto
					h-12 md:h-16 lg:h-[90%]
					aspect-1/1 top-[50%] -translate-y-[50%]
					flex items-center justify-center rounded-full bg-secondary font-bold 
					text-[20px] md:text-[30px] lg:text-[40px]  absolute 
					-left-6 md:-left-9 lg:-left-10 ">
          <p >2</p>
        </div>
        <span class="text-[20px] md:text-[30px] lg:text-[40px] 
					bg-[#D9D9D9] font-bold 
					pl-10 md:pl-14 
					pr-6 md:pr-8 
					py-2 md:py-3 tracking-[5px] md:tracking-[12px] 
					">棒球場 外圍</span>
      </div>
        <div class="relative mt-5 md:mt-10">
						<FieldInnerSvg></FieldInnerSvg>
        </div>
      </div>
      <p class="flex justify-end text-[12px] md:text-[20px] lg:text-[24px]">經緯度：E 120″41′9.1″　N 24″12′0.3″</p>
      <div
        class="mt-10 md:mt-20  px-2 md:px-8 py-2 md:py-6 shadow-[3px_3px_5px_rgba(0,0,0,0.4)] text-[16px] sm:text-[24px] xl:text-[22px] 2xl:text-[26px]">
        <p>場地簡介：</p>
        <p class="indent-[28px] mt-5">
          洲際棒球場周邊辦公室坐落於完善的運動與商業機能圈內，鄰近大型活動場地與主要交通動線，環境開闊、機能成熟。結合辦公、休閒與生活便利性，適合企業設點、團隊進駐，在活絡氛圍中打造高效且具特色的工作空間。
        </p>
      </div>
    </div>
  </GeneralFrame>
</template>

<style scoped>
</style>