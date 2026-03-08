<script setup>
defineProps({
    isActive: { type: Boolean, default: false },
    route: { type: String, default: "" },
})
</script>

<template>
    <component :is="route ? 'RouterLink' : 'div'" :to="route" :class="[
        'flex items-center justify-center w-full py-5 text-[22px] transition-all duration-300 cursor-pointer',
        // 手機版特有的 Hover 與背景
        'text-white hover:bg-white/20 active:bg-white active:text-[#0D2953]',
        // 如果 isActive 為真（選中狀態）
        isActive ? 'bg-white/30 font-bold' : 'bg-transparent'
    ]">
        <slot></slot>
    </component>
</template>

<style scoped></style>
