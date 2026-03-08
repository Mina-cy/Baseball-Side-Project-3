<script setup>
defineProps({
  left: { type: String, default: '最新' },
  right: { type: String, default: '消息' },
  color: { type: String, default: "text-black"},
})
</script>

<template>
  <div class="flex font-bold items-stretch" :class="color">
    <!-- Left -->
    <div class="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[96px] tracking-[4px] md:tracking-[15px] leading-none">
      <slot name="left">{{ left }}</slot>
    </div>

    <!-- Right (match height + center) -->
    <div class="h-full grid place-items-center">
      <div class="text-[12px] sm:text-[26px] md:text-[36px] lg:text-[40px] tracking-[12px] mt-1 [writing-mode:vertical-rl]">
        <slot name="right">{{ right }}</slot>
      </div>
    </div>
  </div>
</template>
