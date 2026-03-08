<script setup>
  import ParallaxItems from "@/components/ParallaxItems.vue"
  import bg1 from "@/assets/img/parallax/bg-1.png"
  import bg2 from "@/assets/img/parallax/bg-2.png"
  import bg3 from "@/assets/img/parallax/bg-3.png"
  import bg4 from "@/assets/img/parallax/bg-4.png"
  import bg5 from "@/assets/img/parallax/bg-5.png"
</script>
<template>
  <div class="absolute top-0 left-0 w-full h-full -z-10">
    <div class="absolute top-200 left-0 w-full">
      <ParallaxItems :src="bg1" :speed="8" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-200 left-0 w-full">
      <ParallaxItems :src="bg2" :speed="8" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-600 left-0 w-full">
      <ParallaxItems :src="bg3" :speed="5" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-600 left-0 w-full">
      <ParallaxItems :src="bg4" :speed="5" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-300 left-0 w-full">
      <ParallaxItems :src="bg1" :speed="-5" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-300 left-0 w-full">
      <ParallaxItems :src="bg2" :speed="-5" alt="hero image"></ParallaxItems>
    </div>
    <div class="absolute top-1100 left-0 w-full">
      <ParallaxItems :src="bg5" :speed="1" alt="hero image"></ParallaxItems>
    </div>
  </div>
</template>