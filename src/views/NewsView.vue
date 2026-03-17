<script setup>
import { ref, computed } from 'vue'
import GeneralFrame from '@/components/GeneralFrame.vue'
import NewActivities from '@/components/NewActivities.vue'
import Pagination from '@/components/Pagination.vue'
import newsData from '@/assets/json/news.json'

// 分頁狀態
const currentPage = ref(1)
const itemsPerPage = 10  // 每頁顯示 10 筆

// 當前頁要顯示的資料
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsData.slice(start, end)
})

// 切換頁面
const handlePageChange = (page) => {
  currentPage.value = page
  // 可以加個平滑滾動到頂部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <GeneralFrame titleLeft="最新" titleRight="消息">
    <div class="mt-5 w-full rounded-[16px] bg-white p-5 lg:p-15">
      
      <!-- 顯示目前筆數資訊（可選） -->
      <div class="mb-4 text-sm text-gray-500">
        顯示第 {{ (currentPage - 1) * itemsPerPage + 1 }} 至 
        {{ Math.min(currentPage * itemsPerPage, newsData.length) }} 筆，
        共 {{ newsData.length }} 筆
      </div>
      
      <!-- 卡片列表 -->
      <div v-if="paginatedData.length === 0" class="flex justify-center items-center h-40 text-gray-500">
        暫無最新消息
      </div>
      <div v-else class="flex flex-col gap-4">
        <NewActivities 
          v-for="item in paginatedData" 
          :key="item.id"
          :type="item.type"
          :year="item.year"
          :date="item.date"
          :content="item.content"
        />
      </div>
      
      <!-- 分頁器 -->
      <Pagination 
        :totalItems="newsData.length"
        :itemsPerPage="itemsPerPage"
        :currentPage="currentPage"
        @page-change="handlePageChange"
      />
      
    </div>
  </GeneralFrame>
</template>