<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import news from '@/assets/img/news.svg'
</script>

<template>
 <GeneralFrame titleLeft="最新" titleRight="消息">
        <div class="w-full h-950 p-15 mt-15 bg-white rounded-[16px]">

            <img :src="news" alt="news">
            </div>
            </GeneralFrame>
</template>

<style scoped></style>