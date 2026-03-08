<script setup>
  defineProps({
    item: {
      type: Object,
      default: () => ({
        date: {
          year: "2026",
          md: "01.13",
        },
        title: "五月天演唱會首場熱力開唱！",
      }),
    },
  })
</script>
<template>
  <div class="w-full bg-white hover:bg-[#C62828]/10 active:bg-[#0D2953]/40 font-oswald shadow-[3px_3px_5px_rgba(0,0,0,0.4)] cursor-pointer">
    <div class="flex items-center gap-1  md:gap-4 lg:gap-8 
    px-5 lg:px-8 
    py-4 lg:py-6">
      <!-- Date -->
      <div class="w-[110px] leading-none">
        <div class="text-[18px]  lg:text-[22px] tracking-wide text-black">
          {{ item.date.year }}
        </div>
        <div class="mt-2 text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] tracking-tight text-black">
          {{ item.date.md }}
        </div>
      </div>
      <!-- Vertical divider -->
      <div class="h-[72px] w-px bg-black/60"></div>
      <!-- Title -->
      <div class="flex-1 min-w-0">
        <div class="text-[24px] lg:text-[34px] tracking-wide text-black truncate">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>