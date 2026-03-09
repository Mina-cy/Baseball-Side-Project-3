<script setup>
import FloorSign from '@/components/FloorSign.vue'
import HashTag from '@/components/HashTag.vue'
import { computed } from 'vue'

const props = defineProps({
  detail: {
    type: Object,
    required: true
  }
})

// 圖片路徑
const imgSrc = computed(() => `/json-image-banner/${props.detail.imgURL}`)

// 格式化價格顯示
const formattedDeposit = computed(() => {
  if (!props.detail.deposit) return ''
  return props.detail.deposit.replace('NT$', 'NT$ ')
})
</script>

<template>
  <div
    class="m-auto mt-6 h-auto md:mt-8 md:flex md:h-[280px] md:gap-3 lg:mt-8 lg:h-[300px] xl:mt-8 xl:h-[330px] 2xl:mt-10 2xl:h-[400px]
           sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[90%]"
  >
    <!-- 左邊圖片區 -->
    <div
      class="relative h-[250px] w-full bg-blue-100 md:h-auto md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[55%]"
    >
      <img
        :src="imgSrc"
        :alt="detail.name"
        class="h-full w-full object-cover"
        @error="(e) => console.log('圖片載入失敗：', e.target.src)"
      />
      <FloorSign :floor="detail.floor" />
    </div>

    <!-- 右邊資訊區 -->
    <div
      class="mx-5 mt-4 flex flex-1 flex-col gap-2 text-[20px] md:mx-5 md:mt-0 md:gap-2 lg:mx-6 lg:gap-2 xl:mx-7 xl:gap-3 2xl:mx-8 2xl:gap-3"
    >
      <!-- 廣告名稱 -->
      <div class="text-[26px] font-bold md:text-[24px] lg:text-[27px] xl:text-[34px]">
        {{ detail.name }}
      </div>

      <!-- 標籤 -->
      <HashTag>{{ detail.tag }}</HashTag>

      <!-- 動態資訊列表 -->
      <div class="md:text-[20px] lg:text-[22px]">尺寸：{{ detail.area_ping }}</div>
      <div class="md:text-[20px] lg:text-[22px]">廣告樣式：{{ detail.tag }}</div>
      <div class="md:text-[20px] lg:text-[22px]">設置期間：依活動需求協調</div>
      <div class="md:text-[20px] lg:text-[22px]">收費方式：{{ formattedDeposit }}</div>
      <div class="md:text-[20px] lg:text-[22px]">保證金：NT$ 50,000</div>
    </div>
  </div>
</template>
