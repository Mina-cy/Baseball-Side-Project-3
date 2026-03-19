<script setup>
import { computed } from 'vue'
import FloorSign from '@/components/FloorSign.vue'

const props = defineProps({
  detail: {
    type: Object,
    required: true,
  },
})

const imgSrc = computed(() => {
  if (!props.detail?.imgURL) return ''
  // 部署後是 "/Baseball-Side-Project-3/"
  const base = import.meta.env.BASE_URL 
  // 假設你的圖片放在 public/images/ 裡面
  // 如果 detail.imgURL 是 "ball.jpg"，最後會變成 "/Baseball-Side-Project-3/images/ball.jpg"
  return `${base.replace(/\/$/, '')}/json-image/${props.detail.imgURL}`
})
</script>

<template>
  <div
    class="
      m-auto mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-10
      md:flex gap-3
      sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[90%]
      h-auto md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[350px]
    "
  >
    <!-- 圖片區 -->
    <div
      class="
        relative bg-blue-100
        w-full md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[55%]
        h-[250px] md:h-auto
      "
    >
      <img
        :src="imgSrc"
        :alt="detail.name"
        class="w-full h-full object-cover rounded-lg"
      />

      <!-- 樓層標示 -->
      <FloorSign :floor="detail.floor" />
    </div>

    <!-- 文字資訊 -->
    <div
      class="
        my-5 md:my-4 lg:my-5 xl:my-6 2xl:my-6
        mx-5 md:mx-5 lg:mx-6 xl:mx-7 2xl:mx-8
        text-[20px]
        flex-1 flex flex-col
        gap-2 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6
      "
    >
      <div class="font-bold text-[28px] md:text-[30px] xl:text-[34px]">
        {{ detail.name }}
      </div>

      <hr class="w-full 2xl:w-[80%] border-b-2 border-black" />

      <div class="md:text-[20px] lg:text-[22px]">
        坪數：{{ detail.area_ping }} 
      </div>

      <div class="md:text-[20px] lg:text-[22px]">
        最大容納人數：{{ detail.max_capacity }} 人
      </div>

      <div class="md:text-[20px] lg:text-[22px]">
        定價：{{ detail.price }}
      </div>

      <div class="md:text-[20px] lg:text-[22px]">
        保證金：{{ detail.deposit }}
      </div>
    </div>
  </div>
</template>
