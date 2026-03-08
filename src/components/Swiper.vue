<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import img1 from '@/assets/img/image-slider/img-3.jpg'
import img2 from '@/assets/img/image-slider/img-2.jpg'
import img3 from '@/assets/img/image-slider/img-1.jpg'
import img4 from '@/assets/img/image-slider/img-4.jpg'
import img5 from '@/assets/img/image-slider/img-5.jpg'
import img6 from '@/assets/img/image-slider/img-6.jpg'

const modules = [Pagination, Autoplay]

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
]
</script>
<template>
  <Swiper direction="vertical" 
  :modules="modules" 
  :loop="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
  :pagination="{
    type: 'progressbar'
  }" class="h-full cursor-pointer">
    <SwiperSlide v-for="img in images" :key="img.id" class="h-full">
      <img :src="img.src" :alt="img.alt" class="h-full w-full object-cover" />
    </SwiperSlide>
  </Swiper>
</template>
<style scoped>
:deep(.swiper-pagination-progressbar) {
  width: 20px;
  right: 0;
  left: auto;
}

:deep(.swiper-pagination-progressbar-fill) {
  background-color: #C62827;
}
</style>