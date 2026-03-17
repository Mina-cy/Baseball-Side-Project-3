<script setup>

defineProps({
  events: {
    type: Array,
    required: true
  }
})
// 處理圖片路徑的函數
const getImageUrl = (imageName) => {
  if (!imageName) return null
  // 使用 Vite 的動態導入方式
  return new URL(`../assets/img/timeline/${imageName}`, import.meta.url).href
}
</script>

<template>
  <div class="p-5 md:p-10">
    <d-timeline direction="vertical">
      <d-timeline-item 
        v-for="(item, index) in events" 
        :key="item.id"
        :position="index % 2 === 0 ? 'left' : 'right'" 
        :dot-color="item.color || '#0D2953'"
      >
        <!-- 卡片內容區 -->
        <div class="timeline-card p-4 rounded-xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition-shadow">
          <!-- 年份和日期 -->
          <div class="flex justify-between items-center mb-2">
            <span class="text-2xl font-black text-blue-900">{{ item.year }}</span>
            <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{{ item.date }}</span>
          </div>
          
          <!-- 標題 -->
          <div class="font-bold text-lg text-gray-800 mb-2">{{ item.title }}</div>
          
          <!-- 分類標籤 -->
          <div class="mb-3">
            <span class="text-xs px-2 py-1 rounded-full" 
                  :style="{ 
                    backgroundColor: item.color + '20', 
                    color: item.color 
                  }">
              {{ item.category }}
            </span>
          </div>
          
          <!-- 圖片顯示區（如果有圖片） -->
          <div v-if="item.image" class="mb-3 overflow-hidden rounded-lg">
            <img 
              :src="getImageUrl(item.image)" 
              class="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" 
              :alt="item.title"
              @error="handleImageError"
            />
          </div>
          
          <!-- 描述 -->
          <p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p>
          
          <!-- 底部圖示 -->
          <div class="mt-3 flex justify-end">
            <i :class="item.icon" class="text-gray-400"></i>
          </div>
        </div>
      </d-timeline-item>
    </d-timeline>
  </div>
</template>

<style scoped>
.timeline-card {
  min-width: 250px;
  margin-bottom: 2rem;
}

/* 讓左側的卡片內容文字靠右，視覺更對稱 */
:deep(.d-timeline-item-left .timeline-card) {
  text-align: right;
}

:deep(.d-timeline-item-left .timeline-card .flex.justify-between) {
  flex-direction: row-reverse;
}

:deep(.d-timeline-item-left .timeline-card .flex.justify-end) {
  justify-content: flex-start;
}
</style>