
<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import img1 from '@/assets/img/image-slider/img-1.jpg'
  import img2 from '@/assets/img/image-slider/img-2.jpg'
  import img3 from '@/assets/img/image-slider/img-3.jpg'
  import img4 from '@/assets/img/image-slider/img-4.jpg'
  import img5 from '@/assets/img/image-slider/img-5.jpg'
  import img6 from '@/assets/img/image-slider/img-6.jpg'
  const modules = [Autoplay]

  // 之後你可以改成從 JSON/API 拿
  const images = [
    { id: 1, src: img1, alt: 'img-1' },
    { id: 2, src: img2, alt: 'img-2' },
    { id: 3, src: img3, alt: 'img-3' },
    { id: 4, src: img4, alt: 'img-4' },
    { id: 5, src: img5, alt: 'img-5' },
    { id: 6, src: img6, alt: 'img-6' },
  ]
</script>
<template>
  <div class=" py-8 h-full">
    <swiper :modules="modules" :loop="true" :slidesPerView="'auto'" :spaceBetween="16" :speed="5000" :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }" :grabCursor="true" class="w-full h-full smooth-swiper">
      <swiper-slide v-for="img in images" :key="img.id" class="!w-[600px] shape">
        <img :src="img.src" :alt="img.alt" class="h-full w-full rounded-xl object-cover" loading="lazy" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
  .shape {
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%,0% 100%);
  }
  .smooth-swiper :deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
  }
</style>