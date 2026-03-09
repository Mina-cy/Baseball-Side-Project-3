<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue'
import RentalCard from '@/components/RentalCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { useRentalStore } from '@/composables/useRentalStore.js'

import { ref, onMounted } from 'vue'

const { state, filteredList, selectFilters } = useRentalStore()
const showGuide = ref(false)

// 頁面載入時自動顯示
onMounted(() => {
  showGuide.value = true
})

const closeGuide = () => {
  showGuide.value = false
}
</script>
<template>
  <div
    v-if="showGuide"
    @click.self="closeGuide"
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
  >
    <div
      class="relative flex w-[90%] max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12"
    >
      <!-- 提示圖示與文字 -->
      <div
        class="flex h-20 w-20 items-center justify-center rounded-full bg-[#0D2953]"
      >
        <BaseIcon
          name="material-symbols:bookmark-outline"
          class="text-4xl text-white"
        />
      </div>
      <h3 class="text-2xl font-bold text-[#0D2953]">溫馨提醒</h3>
      <p class="text-lg leading-relaxed text-gray-600">
        看到心儀的場地嗎？<br />
        點擊卡片右上角的 <span class="font-bold text-[#C62828]">收藏</span>
        <br />
        即可將場地加入您的「合作提案」清單喔！
      </p>
      <!-- 只保留這個主要的關閉按鈕 -->
      <button
        @click="closeGuide"
        class="mt-4 rounded-full bg-[#0D2953] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#1a3a6d] active:scale-95"
      >
        我知道了，開始探索
      </button>
    </div>
  </div>
  <!-- bg -->
  <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="區域租借">
    <!-- search -->
    <div class="relative h-40 w-full md:h-40">
      <div
        class="lg:py-15 absolute bottom-0 left-1/2 flex h-auto w-3/4 -translate-x-1/2 translate-y-[65%] flex-col items-center justify-center gap-3 bg-white px-5 py-4 shadow-[2px_4px_10px_rgba(0,0,0,0.25)] sm:py-10 md:gap-12 md:px-10 md:py-10"
      >
        <p class="font-inter font-bold text-[16x] md:text-[24px]">
          從現在開始，選擇容納人數與用途hashtag，一步一步，把想法變成一個真的會發生的畫面。
        </p>
        <SearchBar
          v-model:guests="state.draftGuests"
          v-model:hashtag="state.draftHashtag"
          @search="selectFilters"
        />
      </div>
    </div>

    <!-- Cards -->
    <div
      class="pt-75 w-full rounded-[16px] bg-white px-2 pb-10 md:px-14 md:pt-60"
    >
      <!-- 有搜尋結果 -->
      <div
        v-if="filteredList.length"
        class="rwd grid auto-rows-fr place-items-center gap-12"
      >
        <RentalCard
          v-for="[id, item] in filteredList"
          :key="id"
          :id="id"
          :name="item.name"
          :img="item.imgURL"
          :tags="item.tag.split('、')"
          :floor="item.floor"
          class="mx-auto w-full max-w-[500px]"
        />
      </div>
      <!-- 沒有搜尋結果 -->
      <div
        v-else
        class="flex flex-col items-center justify-center py-20 text-gray-500"
      >
        <p class="mb-4 text-2xl font-bold">找不到符合條件的場地 😢</p>
        <p class="text-lg">試試調整人數或搜尋關鍵字吧</p>
      </div>
    </div>
  </GeneralFrame>
</template>

<style scoped>
.rwd {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 950px) {
  .rwd {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1500px) {
  .rwd {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
