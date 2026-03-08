<script setup>
  import GeneralBg from "@/components/GeneralBg.vue"
  import SectionTitle from "@/components/SectionTitle.vue"

  defineProps({
    titleLeft: { type: String, default: '最新' },
    titleRight: { type: String, default: '消息' },
    color: { type: String, default: "text-white" },
    subTitle1: { type: String, default: "" },
    subTitle2: { type: String, default: "" },
  })
</script>
<template>
  <!-- bg -->
  <div class="relative">
    <GeneralBg></GeneralBg>
    <div class="w-full 
    mb-5 sm:mb-20 md:mb-30 
    py-23 sm:py-30 md:py-35 
    px-[40px] sm:px-[50px] md:px-[90px]">
      <div class="flex items-center gap-6">
        <SectionTitle :left="titleLeft" :right="titleRight" :color="color"></SectionTitle>

        <hr v-if="subTitle1" class="w-3 md:w-12 h-[6px] bg-white my-6">

        <div class="text-[20px] sm:text-[24px] md:text-[36px] my-6 font-bold" :class="color"> {{ subTitle1 }}</div>

        <hr v-if="subTitle2" class="w-5 md:w-12 h-[6px] bg-white my-6">

        <div class="text-[20px] sm:text-[24px] md:text-[36px] my-6 font-bold" :class="color"> {{ subTitle2 }}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>