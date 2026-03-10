<script setup>
import BookmarkBtn from '@/components/BookmarkBtn.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useBookmarkStore } from '@/composables/useBookmarkStore.js'  

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, default: '辦公室-138' },
  tags: { type: Array, default: () => ['辦公室', '需要桌椅'] },
  floor: { type: String, default: '1F' },
  img: { type: String, default: 'coop-slider-1.jpg' },
  isBookmarked: { type: Boolean, default: false }  
})
const { toggle } = useBookmarkStore() 

const handleToggle = () => {  // 加入點擊事件
  toggle(props.id, 'area')
}
const imgSrc = computed(() => `/json-image/${props.img}`)
</script>

<template>
  <div
    class="group flex h-full w-full flex-col 
           bg-white p-4 transition-all duration-300
           shadow-[2px_4px_10px_rgba(0,0,0,0.25)]
           hover:bg-[#214F83] hover:text-white
           sm:p-6"
  >
    <!-- 標題列：球場外圍 + 收藏按鈕 -->
    <div class="mb-2 flex items-center justify-between sm:mb-4">
      <p class="text-sm font-bold sm:text-base md:text-lg">球場外圍</p>
      <BookmarkBtn :id="props.id" type="area" 
        @toggle="handleToggle"  />
    </div>

    <!-- 圖片 -->
    <img
      :src="imgSrc"
      :alt="name"
      class="mb-2 aspect-[11/7] w-full object-cover transition-all duration-300
             group-hover:rounded-[50px] sm:mb-4"
    />

    <!-- 場地名稱 -->
    <p class="mb-2 truncate text-lg font-bold tracking-wide sm:mb-3 sm:text-xl md:text-2xl">
      {{ name }}
    </p>

    <!-- 標籤區塊 -->
    <div class="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
      <div
        v-for="t in tags"
        :key="t"
        class="inline-block rounded bg-black px-2 py-1 text-xs font-bold text-white
               transition-colors group-hover:bg-white group-hover:text-[#214F83]
               sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base"
      >
        # {{ t }}
      </div>
    </div>

    <!-- 底部：樓層 + Read more -->
    <div class="mt-auto flex items-center justify-between pt-2 text-xs sm:pt-3 sm:text-sm md:text-base">
      <!-- 樓層圓圈 -->
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full border-2 font-bold
               transition-colors group-hover:border-white
               sm:h-10 sm:w-10 sm:border-3 md:h-12 md:w-12"
      >
        {{ floor }}
      </div>

      <!-- Read more 連結 -->
      <RouterLink
        :to="{ name: 'area-rental-inner', params: { id: props.id } }"
        class="flex cursor-pointer items-center font-bold no-underline transition-colors
               group-hover:text-[#FF0000]"
      >
        Read more
        <BaseIcon name="mingcute:arrow-right-fill" class="ml-1 text-xs sm:text-sm" />
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