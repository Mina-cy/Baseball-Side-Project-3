<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import aboutmultifunction from '@/assets/img/aboutmultifunction.svg'
import lilologo from '@/assets/img/lilologo.svg'
</script>

<template>
  <GeneralFrame
    titleLeft="關於"
    titleRight="洲際"
    subTitle1="附屬多功能運動中心"
  >
    <div class="md:mt-15 mt-5 w-full rounded-[16px] bg-white">
      <div class="md:p-15 p-10">
        <div
          class="block border-l-2 border-black pl-3 text-[28px] font-bold leading-none md:text-[36px]"
        >
          附屬多功能運動中心
        </div>
        <div class="mt-10 flex w-full justify-center gap-4">
          <div class="w-full shrink-0 xl:w-[60%]">
            <img :src="aboutmultifunction" alt="aboutfield" class="w-full" />
            <div class="mt-5">
              <p>關於多功能運動中心租借使用的相關訊息請洽(04)2422-8809</p>
              <p>相關訊息請見好運來官方網站 https://tinyurl.com/ya9ddnb9</p>
            </div>
          </div>
        </div>
        <div
          class="mt-10 flex flex-1 flex-col whitespace-pre-wrap p-10 text-[16px] sm:text-[24px] xl:text-[22px] 2xl:text-[26px]"
        >
          <p class="indent-[2em]">
            臺中洲際棒球場附屬多功能運動中心由「好運來洲際婚宴中心」營運，為結合運動、活動與城市地標功能的複合式場館。建築採用極具特色的薄殼結構工法，直徑約
            70 公尺、高約 29
            公尺，外型宛如一顆蛋殼，因此被稱為「台中迷你蛋」。此工法透過充氣成型、鋼筋與噴灌水泥打造薄型殼體，兼具結構強度與輕盈視覺。雪梨歌劇院、倫敦大英博物館、北京奧運羽毛球館等世界級建築，亦皆運用相同的薄殼結構工法。
          </p>
          <br />
          <a
            href="http://www.lilo-park.com.tw/home.php?lang=tw"
            target="_blank"
            class="flex w-[120px] cursor-pointer self-end md:w-[150px] lg:w-[200px]"
          >
            <img :src="lilologo" alt="lilologo" />
          </a>
        </div>
      </div>
    </div>
  </GeneralFrame>
</template>
