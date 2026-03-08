<script setup>
</script>
<template>
  <div
    class="home-plate absolute top-0 
    right-0 md:right-5 lg:right-7  xl:right-8   2xl:right-10
    h-[800px] sm:h-[800px] md:h-[80%] lg:h-[90%] xl:h-[92%] 
    sm:w-full md:w-[74%] lg:w-[76%] xl:w-[79%]  2xl:w-[78%]
    md:top-[85px]"
  >
    <video
      class="h-full w-full scale-100 object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="/public/video/video.mp4" type="video/mp4" />
    </video>
  </div>
</template>
<style scoped>
.home-plate {
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
}

@media (min-width: 640px) {
  .home-plate {
    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
  }
}

@media (min-width: 768px) {
  .home-plate {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);
  }
}

@media (min-width: 1024px) {
  .home-plate {
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 50% 90%, 0% 70%);
  }
}
</style>
