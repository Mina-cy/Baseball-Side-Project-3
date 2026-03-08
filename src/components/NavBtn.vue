<script setup>
defineProps({
  isActive: { 
    type: Boolean, 
    default: false 
  },
  route: { 
    type: String, 
    default: "" 
  }, 
})
</script>

<template>
  <component
    :is="route ? 'RouterLink' : 'div'"
    :to="route"
    :class="[
      'relative flex shrink-0 cursor-pointer py-2 transition-all duration-200 bg-transparent',
      'md:px-2 lg:px-4 xl:px-7',
      'text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]',
      'text-white',
      'hover:bg-white/30 hover:text-[#0D2953]',
      'active:!bg-white active:!text-[#0D2953]',
      isActive ? '!bg-white !text-[#0D2953]' : '',
    ]"
  >
    <slot></slot>
  </component>
</template>