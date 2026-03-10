<script setup>
import BannerBtn from '@/components/BannerBtn.vue'
import BannerVideo from '@/components/BannerVideo.vue'
import BannerPic1 from '@/assets/img/banner-bg.png'
import BannerText from '@/components/BannerText.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import searchBg from '@/assets/img/search-bg.png'
import SearchBar from '@/components/SearchBar.vue'
import NewsItem from '@/components/NewsItem.vue'
import baseballField from '@/assets/img/baseball-stadium.png'
import Swiper from '@/components/Swiper.vue'
import MarqueeSwiper from '@/components/MarqueeSwiper.vue'
import FieldSvg from '@/components/FieldSvg.vue'
import FieldInnerSvg from '@/components/FieldInnerSvg.vue'
import ParallaxSection from '@/components/ParallaxSection.vue'
import calendar from '@/assets/img/calendar.svg'
import FB from '@/assets/img/FB.svg'
import { useRentalStore } from '@/composables/useRentalStore.js'
import { ref } from 'vue'
const { state, selectFilters } = useRentalStore()

const showGuide = ref(false)
</script>
<template>
  <header class="relative">
    <div
      class="top-160 sm:top-170 md:top-290 lg:top-320 xl:top-320 2xl:top-370 z-60 absolute h-[5400px] w-[40px] sm:h-[5520px] md:h-[6300px] md:w-[80px] lg:h-[6300px] lg:w-[90px] xl:h-[6000px] 2xl:h-[6200px] 2xl:w-[100px]"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/TaichungIntercontinentalBaseballStadium/?locale=zh_TW"
      >
        <img :src="FB" alt="FB" class="top-70 mt-100 sticky" />
      </a>
    </div>
    <!-- banner區域 -->
    <div class="max-h-300 relative min-h-[600px] w-full">
      <img
        :src="BannerPic1"
        alt="Banner"
        class="hidden h-auto min-h-[600px] w-full object-cover md:block md:min-h-[720px] lg:min-h-[800px] xl:h-[98%]"
      />
      <!-- banner 左邊btn -->
      <div
        class="-translate-[50%] top-170 sm:top-160 absolute left-[50%] z-10 flex items-center gap-3 sm:gap-4 md:left-[100px] md:top-[205px] md:flex-col md:gap-5 lg:left-[110px] lg:top-[210px] xl:left-[120px] xl:top-[220px] 2xl:left-[130px] 2xl:top-[230px]"
      >
        <a href="#rent">
          <BannerBtn>租借服務</BannerBtn>
        </a>
        <a href="#compaign">
          <BannerBtn>精彩賽事</BannerBtn>
        </a>
        <a href="#intro">
          <BannerBtn>場地介紹</BannerBtn>
        </a>
      </div>
      <BannerText></BannerText>
      <!-- 右邊影片 -->
      <BannerVideo></BannerVideo>
    </div>
  </header>
  <main>
    <!-- image slider -->
    <div class="h-100 mt-10 hidden w-full overflow-hidden md:block">
      <MarqueeSwiper></MarqueeSwiper>
    </div>
    <div
      class="pt-70 xl:pt-50 2xl:pt-50 lg:py-30 2xl:py-50 md:py-50 font-inter relative w-full px-[13px] sm:px-[clamp(13px,10vw,180px)] sm:pt-80 md:py-20 md:pt-40 lg:pt-40 xl:py-40"
    >
      <!-- ParallaxSection -->
      <ParallaxSection></ParallaxSection>
      <SectionTitle id="intro" left="場地" right="介紹" />
      <!-- field -->
      <div
        class="xl:p-15 z-10 mt-5 h-auto w-full bg-white p-8 shadow-2xl md:p-12"
      >
        <div
          class="mb-5 flex h-auto w-full min-w-[100px] flex-col items-center md:mb-10"
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
          <div class="relative">
            <img :src="baseballField" alt="球場平面圖" />
            <FieldSvg></FieldSvg>
          </div>
          <div class="mt-4 flex justify-end">
            <div
              class="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-[12px] text-black shadow-sm md:text-[18px] lg:text-[20px]"
            >
              <BaseIcon
                name="mdi:compass"
                class="text-lg md:text-xl"
              ></BaseIcon>
              <p>經緯度：E 120°41′9.1″　N 24°12′0.3″</p>
            </div>
          </div>
        </div>
        <hr
          class="my-10 w-full border-2 border-t border-dashed border-gray-400 md:my-14"
        />
        <div
          class="mb-5 flex h-auto w-full min-w-[100px] flex-col items-center md:mb-10"
        >
          <div class="relative mb-5 flex">
            <div
              class="aspect-1/1 bg-secondary absolute -left-6 top-[50%] flex h-12 w-12 -translate-y-[50%] items-center justify-center rounded-full text-[20px] font-bold md:-left-9 md:h-16 md:w-16 md:text-[30px] lg:-left-10 lg:h-[90%] lg:w-auto lg:text-[40px]"
            >
              2
            </div>
            <span
              class="tracking-[5px]md:tracking-[12px] bg-[#D9D9D9] py-2 pl-10 pr-6 text-[20px] font-bold md:py-3 md:pl-14 md:pr-8 md:text-[30px] lg:text-[40px]"
              >棒球場 外圍</span
            >
          </div>
          <div class="relative w-full">
            <FieldInnerSvg></FieldInnerSvg>
          </div>
          <div class="mt-4 flex justify-end">
            <div
              class="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-[12px] text-black shadow-sm md:text-[18px] lg:text-[20px]"
            >
              <BaseIcon
                name="mdi:compass"
                class="text-lg md:text-xl"
              ></BaseIcon>
              <p>經緯度：E 120°41′9.1″　N 24°12′0.3″</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:p-15 mb-40 mt-20 flex w-full flex-col items-center bg-white p-8 shadow-2xl md:p-12"
      >
        <div
          class="mb-5 flex h-auto w-full min-w-[100px] flex-col items-center md:mb-10"
        >
          <div class="relative flex">
            <div
              class="aspect-1/1 bg-secondary absolute -left-6 top-[50%] flex h-12 w-12 -translate-y-[50%] items-center justify-center rounded-full text-[20px] font-bold md:-left-9 md:h-16 md:w-16 md:text-[30px] lg:-left-10 lg:h-[90%] lg:w-auto lg:text-[40px]"
            >
              3
            </div>
            <span
              class="bg-[#D9D9D9] py-2 pl-10 pr-6 text-[20px] font-bold tracking-[5px] sm:tracking-[12px] md:py-3 md:pl-14 md:pr-8 md:text-[30px] lg:text-[40px]"
              >多功能附屬運動中心</span
            >
          </div>
        </div>
        <p
          class="mt-10 indent-[2em] text-[18px] font-medium leading-[50px] tracking-[4px] md:text-[24px] lg:text-[28px] xl:text-[32px]"
        >
          臺中洲際棒球場附屬多功能運動中心由「好運來洲際婚宴中心」營運，為結合運動、活動與城市地標功能的複合式場館。建築採用極具特色的薄殼結構工法，直徑約
          70 公尺、高約 29
          公尺，外型宛如一顆蛋殼，因此被稱為「台中迷你蛋」。此工法透過充氣成型、鋼筋與噴灌水泥打造薄型殼體，兼具結構強度與輕盈視覺。雪梨歌劇院、倫敦大英博物館、北京奧運羽毛球館等世界級建築，亦皆運用相同的薄殼結構工法。
        </p>
        <button
          type="button"
          class="mt-2 flex items-center justify-center self-end"
        >
          <a href="http://www.lilo-park.com.tw/home.php?lang=tw" target="_blank"
            ><img src="@/assets/img/lilo-center.png" alt="好運來Logo"
          /></a>
          <div class="h-18 flex -translate-x-1 items-center bg-[#C30D23] pr-5">
            <BaseIcon
              name="mingcute:arrow-right-fill"
              class="text-[40px] text-white"
            ></BaseIcon>
          </div>
        </button>
      </div>
      <!-- rental -->
      <SectionTitle left="租借" right="服務" id="rent" />
      <div
        class="font-inter p-13 xl:p-15 mb-20 flex h-auto w-full flex-col items-center bg-cover bg-center bg-no-repeat text-white 2xl:p-20"
        :style="{ backgroundImage: `url(${searchBg})` }"
      >
        <p
          class="mb-5 text-[22px] font-bold sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]"
        >
          為每一個重要時刻，提供最到位的舞台！
        </p>
        <p class="mb-15 text-[18px] lg:text-[20px] xl:text-[24px]">
          從現在開始，選擇容納人數與用途hashtag，一步一步，把想法變成一個真的會發生的畫面。
        </p>
        <SearchBar
          v-model:guests="state.guests"
          v-model:hashtag="state.hashtag"
          @search="selectFilters"
        />
      </div>
      <!-- News and Calendar -->
      <div
        class="font-inter relative mt-20 flex h-auto w-full flex-wrap items-start gap-5 pb-10 md:mt-40 md:gap-10 xl:flex-nowrap xl:pb-20"
      >
        <!-- News -->
        <div class="mb-10 w-full xl:mb-0 xl:w-[50%]">
          <SectionTitle left="最新" right="消息" />
          <div class="mt-8 flex flex-col gap-2 sm:gap-4 md:gap-6 xl:gap-8">
            <NewsItem
              :item="{
                date: { year: '2026', md: '02.01' },
                title: '頑童MJ116主場，轟炸洲際！',
              }"
            ></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem
              :item="{
                date: { year: '2026', md: '01.10' },
                title: '洲際棒球場場館全面升級，迎接國際賽事！！',
              }"
            ></NewsItem>
            <NewsItem
              :item="{
                date: { year: '2025', md: '12.12' },
                title: '優化觀眾動線、提升球場照明與 LED 大螢幕顯示效果',
              }"
            ></NewsItem>
          </div>
        </div>
        <!-- Calendar -->
        <div class="w-full xl:w-[50%]">
          <p
            class="text-[50px] font-bold leading-none sm:text-[70px] md:text-[90px] lg:text-[96px]"
          >
            <span
              class="inline-block text-[50px] leading-none sm:text-[70px] md:text-[90px] lg:text-[96px]"
              >場地租借</span
            >
            <span
              class="inline-block align-bottom text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]"
              >行事曆</span
            >
          </p>
          <div
            class="mt-5 h-[600px] w-full bg-contain bg-center bg-no-repeat xl:mt-10"
            :style="{ backgroundImage: `url(${calendar})` }"
          ></div>
        </div>
      </div>
      <div
        id="compaign"
        class="mt-5 flex w-full flex-col items-start gap-10 md:mt-20 lg:flex-row"
      >
        <div class="w-auto shrink-0">
          <hr
            class="mb-4 h-1 w-20 border-2 border-black lg:w-full xl:border-white"
          />
          <div class="flex items-start font-bold lg:items-stretch">
            <div class="grid place-items-center">
              <div
                class="mr-3 text-[16px] tracking-[10px] text-black [writing-mode:vertical-rl] sm:text-[26px] md:text-[36px] lg:text-[40px] lg:tracking-[12px] xl:text-white"
              >
                精彩
              </div>
            </div>
            <div
              class="text-[50px] leading-none tracking-[8px] text-black sm:text-[70px] md:text-[90px] lg:text-[96px] lg:tracking-[15px] xl:text-white"
            >
              賽事
            </div>
          </div>
        </div>
      </div>
      <div
        class="mx-auto mt-10 h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:mt-20 lg:h-[600px] lg:w-[80%]"
      >
        <Swiper></Swiper>
      </div>
      <!-- ================= 區塊 3：影片影片 (1:1 比例) ================= -->
      <div
        class="flex w-full flex-col gap-6 py-10 lg:flex-row lg:gap-20 lg:py-20"
      >
        <div class="aspect-video w-full lg:w-1/2">
          <iframe
            class="h-full w-full rounded-xl"
            src="https://www.youtube.com/embed/ELg8zHp5q0A"
            allowfullscreen
          ></iframe>
        </div>
        <div class="aspect-video w-full lg:w-1/2">
          <iframe
            class="h-full w-full rounded-xl"
            src="https://www.youtube.com/embed/DyJPK7z6d1g"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>
