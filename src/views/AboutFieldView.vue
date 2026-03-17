<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import aboutfield from '@/assets/img/aboutfield.png'
import EventTimeline from '@/components/EventTimeline.vue'
import timelineEvents from '@/assets/json/timeline-events.json'

</script>

<template>
  <GeneralFrame titleLeft="關於" titleRight="洲際" subTitle1="球場簡介">
    <div class="mt-5 w-full rounded-[16px] bg-white md:mt-15 shadow-lg">
      <div class="p-10 md:p-15">
        <div
          class="block border-l-2 border-black pl-3 text-[28px] leading-none font-bold md:text-[36px]"
        >
          球場簡介
        </div>
        <div class="mt-10 flex w-full flex-wrap gap-8 xl:flex-nowrap">
          <div class="w-full shrink-0 xl:w-[40%]">
            <img :src="aboutfield" alt="aboutfield" class="w-full" />
          </div>
          <div
            class="flex flex-1 flex-col p-4 text-[16px] whitespace-pre-wrap sm:text-[24px] xl:p-2 xl:text-[22px] 2xl:p-5 2xl:text-[26px]"
          >
            <p class="indent-[2em]">
              臺中市洲際棒球場 ( 簡稱洲際 )
              位於崇德路與環中路口，於2006年完工，是臺灣首座以美式風格打造、符合國際標準的棒球場，也是舉辦多項國際級賽事的重要場地。
            </p>
            <br />
            <p class="indent-[2em]">
              球場看台視野開闊、腹地廣大，上方以棒球縫線為造型的景觀設計，象徵其地標性。現由午資開發股份有限公司負責球場及周邊園區之維護與營運，持續投入資源改善設施，推廣各級棒球運動與教育，並結合賽事、活動與文藝發展，深化國球文化、培養觀賽禮儀，讓棒球成為民眾休閒的一部分，同時行銷臺中城市之美，實踐企業社會責任與回饋鄉土的使命。
            </p>
          </div>
        </div>
        <div
          class="mt-15 block border-l-2 border-black pl-3 text-[28px] leading-none font-bold md:text-[36px]"
        >
          歷年精彩賽事
        </div>
        <div class="mt-10">
          <EventTimeline :events="timelineEvents" />
        </div>
        <div
          class="mt-15 block border-l-2 border-black pl-3 text-[28px] leading-none font-bold md:text-[36px]"
        >
          世界棒球之都
        </div>
        <div
          class="flex flex-1 flex-col p-8 text-[16px] whitespace-pre-wrap sm:text-[24px] xl:text-[22px] 2xl:text-[26px]"
        >
          <p class="indent-[28px]">
            世界棒球之都 -
            臺中市，為了迎接洲際棒球錦標賽於臺灣首次舉行，臺中市政府特別擇定北屯區，而於2005年4月20日開工興建棒球場，並於2006年11月9日球場完工，如期配合賽事舉行，前臺中市長胡志強市長特以「洲際」為新建棒球場冠名之。
          </p>
          <br />
          <p class="indent-[28px]">
            由於2006年洲際盃賽事的圓滿成功，臺中市政府與中華民國棒球協會遂攜手合作，極力爭辦各項世界級大賽，國際棒球總會為感謝臺中市政府的卓越貢獻，特別於2013年世界青棒賽開幕典禮中，公開頒發「世界棒球之都」的獎牌，此為國際棒球總會之創舉，而臺中市獲此殊榮亦為世界空前。
          </p>
        </div>
      </div>
    </div>
  </GeneralFrame>
</template>
