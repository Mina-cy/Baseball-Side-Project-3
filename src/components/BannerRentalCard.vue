<script setup>
import BookmarkBtn from '@/components/BookmarkBtn.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  area_ping: {
    type: String,
    default: ''
  },
  deposit: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  floor: {
    type: String,
    default: '1F'
  },
  img: {
    type: String,
    required: true
  }
})

// 圖片路徑（根據你的實際存放位置調整）
const imgSrc = computed(() => `/json-image-banner/${props.img}`)

// 格式化價格顯示（移除 NT$ 後加上空格）
const formattedDeposit = computed(() => {
  if (!props.deposit) return ''
  return props.deposit.replace('NT$', 'NT$ ')
})

// 測試用：看看 props 有沒有傳進來
console.log('BannerRentalCard props:', {
  id: props.id,
  name: props.name,
  area_ping: props.area_ping,
  deposit: props.deposit,
  tags: props.tags,
  floor: props.floor,
  img: props.img
})
</script>

<template>
  <div
    class="group flex h-full w-full flex-col bg-white p-4 shadow-[2px_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#214F83] hover:text-white sm:p-6"
  >
    <!-- 標題列：廣告名稱 + 收藏按鈕 -->
    <div class="mb-2 flex items-center justify-between sm:mb-4">
      <p class="text-sm font-bold sm:text-base md:text-lg">
        {{ name }}
      </p>
      <BookmarkBtn :id="props.id" />
    </div>

    <!-- 圖片 -->
    <img
      :src="imgSrc"
      :alt="name"
      class="mb-2 aspect-[11/7] w-full object-cover transition-all duration-300 group-hover:rounded-[50px] sm:mb-4"
      @error="(e) => console.log('圖片載入失敗：', e.target.src)"
    />

    <!-- 廣告詳細資訊 -->
    <div class="mb-3 space-y-1 sm:mb-4">
      <!-- 面積 -->
      <div class="flex items-center text-xs sm:text-sm">
        <span class="w-16 font-medium text-gray-600 group-hover:text-white/80">
          面積：
        </span>
        <span class="font-bold">
          {{ area_ping }}
        </span>
      </div>

      <!-- 價格 -->
      <div class="flex items-center text-xs sm:text-sm">
        <span class="w-16 font-medium text-gray-600 group-hover:text-white/80">
          價格：
        </span>
        <span class="font-bold text-[#C62828] group-hover:text-white">
          {{ formattedDeposit }}
        </span>
      </div>
    </div>

    <!-- 標籤區塊 -->
    <div class="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
      <div
        v-for="(t, index) in tags"
        :key="index"
        class="inline-block rounded bg-black px-2 py-1 text-xs font-bold text-white transition-colors group-hover:bg-white group-hover:text-[#214F83] sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base"
      >
        # {{ t }}
      </div>
    </div>

    <!-- 底部：樓層 + Read more -->
    <div
      class="mt-auto flex items-center justify-between pt-2 text-xs sm:pt-3 sm:text-sm md:text-base"
    >
      <!-- 樓層圓圈 -->
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full border-2 font-bold transition-colors group-hover:border-white sm:h-10 sm:w-10 sm:border-3 md:h-12 md:w-12"
      >
        {{ floor }}
      </div>

      <!-- Read more 連結 -->
      <RouterLink
        :to="{ name: 'banner-rental-inner', params: { id: props.id } }"
        class="flex cursor-pointer items-center font-bold no-underline transition-colors group-hover:text-[#FF0000]"
      >
        Read more
        <BaseIcon
          name="mingcute:arrow-right-fill"
          class="ml-1 text-xs sm:text-sm"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* 確保卡片在 grid 中高度一致 */
.group {
  height: 100%;
}
</style>
