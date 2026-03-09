<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import GeneralFrame from '@/components/GeneralFrame.vue'
import GoBack from '@/components/GoBack.vue'
import BookmarkBtn from '@/components/BookmarkBtn.vue'
import BannerImgContent from '@/components/BannerImgContent.vue'
import BriefIntro from '@/components/BriefIntro.vue'
import InnerSmallCard from '@/components/InnerSmallCard.vue'
import Note from '@/components/Note.vue'

// 引入廣告資料
import adData from '@/assets/json/banner-rental-data.json'

const route = useRoute()

// 從網址取得 id
const id = computed(() => String(route.params.id || ''))

// 根據 id 找到對應的廣告資料
const detail = computed(() => {
  return adData.find(ad => ad.id === id.value) || null
})

// 測試用
console.log('當前廣告ID：', id.value)
console.log('廣告詳細資料：', detail.value)
</script>

<template>
  <GeneralFrame titleLeft="廣告" titleRight="租借" subTitle1="廣告租借">
    <div class="md:mt-15 mt-5 h-auto w-full rounded-[16px] bg-white">
      <div
        class="relative m-auto mt-5 h-auto w-full rounded-xl bg-white px-10 pb-20 pt-10"
      >
        <!-- 有資料才顯示 -->
        <div v-if="detail">
          <div class="flex items-center justify-between">
            <GoBack />
            <BookmarkBtn :id="id" />
          </div>
          
          <!-- 廣告圖片區塊 -->
          <BannerImgContent :detail="detail" />

          <!-- 簡介區塊（可自訂內容） -->
          <BriefIntro>
            廣告簡介：
            <p class="indent-[2em]">
              {{ detail.description || '此廣告位置視野開闊，曝光效果極佳，適合各類型品牌宣傳。' }}
            </p>
          </BriefIntro>

          <!-- 兩個並排的資訊卡片 -->
          <div
            class="m-auto mt-10 flex w-full flex-col justify-between md:w-[90%] md:flex-row lg:w-[85%] xl:w-[90%]"
          >
            <!-- 左邊卡片：廣告位置資訊 -->
            <InnerSmallCard>
              <div class="space-y-3">
                <p class="text-lg font-bold">廣告位置</p>
                <p><span class="font-medium">名稱：</span>{{ detail.name }}</p>
                <p><span class="font-medium">面積：</span>{{ detail.area_ping }}</p>
              </div>
            </InnerSmallCard>

            <!-- 右邊卡片：廣告規格 -->
            <InnerSmallCard>
              <div class="space-y-3">
                <p class="text-lg font-bold">廣告規格</p>
                <p><span class="font-medium">類型：</span>{{ detail.tag }}</p>
                <p><span class="font-medium">樓層：</span>{{ detail.floor }}</p>
                <p><span class="font-medium">位置：</span>{{ detail.category || '一般區域' }}</p>
              </div>
            </InnerSmallCard>
          </div>

          <!-- 備註區塊 -->
          <Note>
            備註與其他：<br>
            {{ detail.notes || '如需了解更多廣告細節，請聯繫我們的業務人員。' }}
          </Note>
        </div>

        <!-- 找不到資料時顯示 -->
        <div v-else class="p-10 text-center">
          <p class="mb-4 text-2xl font-bold text-gray-700">找不到這個廣告資料</p>
          <p class="text-gray-500">廣告ID：{{ id }}</p>
          <button 
            @click="$router.back()"
            class="mt-6 rounded bg-[#0D2953] px-6 py-2 text-white hover:bg-[#1a3a6d]"
          >
            返回列表
          </button>
        </div>
      </div>
    </div>
  </GeneralFrame>
</template>
