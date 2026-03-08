<script setup>
  import GeneralFrame from "@/components/GeneralFrame.vue"
  import RentalCard from "@/components/RentalCard.vue"
  import SearchBar from "@/components/SearchBar.vue"
  import BaseIcon from "@/components/BaseIcon.vue";
  import { useRentalStore } from '@/composables/useRentalStore.js'

  import { ref, onMounted } from 'vue';

  const { state, filteredList, selectFilters } = useRentalStore()
  const showGuide = ref(false);

  // 頁面載入時自動顯示
  onMounted(() => {
    showGuide.value = true;
  });

  const closeGuide = () => {
    showGuide.value = false;
  };
</script>
<template>
  <div v-if="showGuide" @click.self="closeGuide" class="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
    <div class="relative bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-[90%] text-center flex flex-col items-center gap-6">
      <!-- 提示圖示與文字 -->
      <div class="w-20 h-20 bg-[#0D2953] rounded-full flex items-center justify-center">
        <BaseIcon name="material-symbols:bookmark-outline" class="text-white text-4xl" />
      </div>
      <h3 class="text-2xl font-bold text-[#0D2953]">溫馨提醒</h3>
      <p class="text-gray-600 text-lg leading-relaxed">
        看到心儀的場地嗎？<br>
        點擊卡片右上角的 <span class="text-[#C62828] font-bold">收藏</span> <br>
        即可將場地加入您的「合作提案」清單喔！
      </p>
      <!-- 只保留這個主要的關閉按鈕 -->
      <button @click="closeGuide" class="mt-4 bg-[#0D2953] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a3a6d] transition-all active:scale-95 shadow-lg">
        我知道了，開始探索
      </button>
    </div>
  </div>
  <!-- bg -->
  <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="廣告租借">
    <!-- search -->
    <div class="relative w-full h-40">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[65%] w-3/4 h-auto shadow-[2px_4px_10px_rgba(0,0,0,0.25)] bg-white flex flex-col items-center justify-center gap-12 py-15 px-10">
        <p class="font-inter font-bold text-[24px]">從現在開始，選擇容納人數與用途hashtag，一步一步，把想法變成一個真的會發生的畫面。</p>
        <SearchBar v-model:guests="state.draftGuests" v-model:hashtag="state.draftHashtag" @search="selectFilters" />
      </div>
    </div>
    <!-- Cards -->
    <!-- Cards -->
    <div class="w-full bg-white rounded-[16px] pt-60 pb-10 px-14">
      <!-- 有搜尋結果 -->
      <div v-if="filteredList.length" class="grid rwd place-items-center gap-12 auto-rows-fr">
        <RentalCard v-for="[id, item] in filteredList" :key="id" :id="id" :name="item.name" :img="item.imgURL" :tags="item.tag.split('、')" :floor="item.floor" />
      </div>
      <!-- 沒有搜尋結果 -->
      <div v-else class="flex flex-col items-center justify-center py-20 text-gray-500">
        <p class="text-2xl font-bold mb-4">
          找不到符合條件的場地 😢
        </p>
        <p class="text-lg">
          試試調整人數或搜尋關鍵字吧
        </p>
      </div>
    </div>
  </GeneralFrame>
</template>
<style scoped>
  .rwd {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 1260px) {
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