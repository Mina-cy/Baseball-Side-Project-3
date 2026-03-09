<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import BannerRentalCard from '@/components/BannerRentalCard.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { ref, onMounted } from 'vue'

// 直接引入 JSON 檔案（陣列格式）
import rawAdData from '@/assets/json/banner-rental-data.json' 

// 廣告資料就是引入的 JSON
const adList = ref(rawAdData)

// 測試用：看看資料有沒有進來
console.log('📦 原始資料:', rawAdData)
console.log('📦 adList 長度:', adList.value.length)
console.log('📦 第一筆資料:', adList.value[0])

// 引導視窗（如果需要）
const showGuide = ref(false)

onMounted(() => {
  const hasShownGuide = sessionStorage.getItem('hasShownAdGuide')
  if (!hasShownGuide) {
    showGuide.value = true
    sessionStorage.setItem('hasShownAdGuide', 'true')
  }
})

const closeGuide = () => {
  showGuide.value = false
}
</script>

<template>
  <!-- 引導視窗 -->
  <div
    v-if="showGuide"
    @click.self="closeGuide"
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
  >
    <div
      class="relative flex w-[90%] max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12"
    >
      <div class="flex h-20 w-20 items-center justify-center rounded-full bg-[#0D2953]">
        <BaseIcon name="material-symbols:ads-click" class="text-4xl text-white" />
      </div>
      <h3 class="text-2xl font-bold text-[#0D2953]">廣告租借</h3>
      <p class="text-lg leading-relaxed text-gray-600">
        選擇您想要的廣告位置<br />
        點擊卡片查看詳細資訊<br />
        即可提出廣告租借提案
      </p>
      <button
        @click="closeGuide"
        class="mt-4 rounded-full bg-[#0D2953] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#1a3a6d] active:scale-95"
      >
        我知道了，開始瀏覽
      </button>
    </div>
  </div>

  <!-- 主要內容 -->
  <GeneralFrame titleLeft="廣告" titleRight="租借" subTitle1="廣告租借">
    <!-- 標題區塊 -->
    <div class="relative mb-8 mt-5 px-4 md:mt-10 md:px-8 lg:px-14">
      <p class="mt-2 text-white
      ">
        共 {{ adList.length }} 個廣告位置
      </p>
    </div>

    <!-- 除錯資訊：如果沒有資料顯示警告 -->
    <div 
      v-if="adList.length === 0" 
      class="mx-4 mb-5 rounded bg-yellow-100 p-4 md:mx-8 lg:mx-14"
    >
      <p class="font-bold text-yellow-800">⚠️ 沒有廣告資料</p>
      <p class="text-yellow-700">請檢查 JSON 檔案是否存在於 src/assets/json/banner-rental-data.json</p>
    </div>

    <!-- Cards -->
    <div class="w-full rounded-[16px] bg-white p-8 pb-10 md:p-15 lg:px-14">
      <div
        v-if="adList.length > 0"
        class="grid grid-cols-1 place-items-center gap-6 auto-rows-fr
               md:grid-cols-2 md:gap-8
               lg:grid-cols-3 lg:gap-10
               xl:grid-cols-4 xl:gap-12"
      >
        <BannerRentalCard
          v-for="ad in adList"
          :key="ad.id"
          :id="ad.id"
          :name="ad.name"
          :area_ping="ad.area_ping"
          :deposit="ad.deposit"
          :img="ad.imgURL"
          :tags="ad.tag.split('、')"
          :floor="ad.floor"
          class="w-full"
        />
      </div>
      
      <!-- 沒有資料時顯示 -->
      <div 
        v-else 
        class="flex flex-col items-center justify-center py-20 text-gray-500"
      >
        <p class="mb-4 text-2xl font-bold">暫無廣告位置</p>
        <p class="text-lg">請稍後再來查看</p>
      </div>
    </div>
  </GeneralFrame>
</template>

<style scoped>
/* 不需要額外樣式，全部用 Tailwind */
</style>