<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },     // 總筆數
  itemsPerPage: { type: Number, default: 5 },       // 每頁筆數
  currentPage: { type: Number, default: 1 },        // 當前頁碼
  visiblePages: { type: Number, default: 5 }        // 顯示多少個頁碼按鈕
})

const emit = defineEmits(['page-change'])

// 總頁數
const totalPages = computed(() => 
  Math.ceil(props.totalItems / props.itemsPerPage)
)

// 產生要顯示的頁碼陣列
const pagesArray = computed(() => {
  const pages = []
  const half = Math.floor(props.visiblePages / 2)
  let start = Math.max(1, props.currentPage - half)
  let end = Math.min(totalPages.value, start + props.visiblePages - 1)

  // 如果後面不夠，往前補
  if (end - start + 1 < props.visiblePages) {
    start = Math.max(1, end - props.visiblePages + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

// 切換頁面
const goToPage = (page) => {
  if (page < 1 || page > totalPages.value || page === props.currentPage) return
  emit('page-change', page)
}
</script>

<template>
  <div class="flex justify-center items-center gap-2 mt-8">
    <!-- 上一頁 -->
    <button 
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    >
      上一頁
    </button>

    <!-- 第一頁 + 省略號 -->
    <button 
      v-if="pagesArray[0] > 1"
      @click="goToPage(1)"
      class="px-3 py-1 rounded border hover:bg-gray-100"
    >
      1
    </button>
    <span v-if="pagesArray[0] > 2" class="px-2">...</span>

    <!-- 頁碼按鈕 -->
    <button
      v-for="page in pagesArray"
      :key="page"
      @click="goToPage(page)"
      class="px-3 py-1 rounded border transition-colors"
      :class="[
        currentPage === page 
          ? 'bg-[#0D2953] text-white border-[#0D2953]' 
          : 'hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>

    <!-- 最後一頁 + 省略號 -->
    <span v-if="pagesArray[pagesArray.length - 1] < totalPages - 1" class="px-2">...</span>
    <button 
      v-if="pagesArray[pagesArray.length - 1] < totalPages"
      @click="goToPage(totalPages)"
      class="px-3 py-1 rounded border hover:bg-gray-100"
    >
      {{ totalPages }}
    </button>

    <!-- 下一頁 -->
    <button 
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    >
      下一頁
    </button>
  </div>
</template>