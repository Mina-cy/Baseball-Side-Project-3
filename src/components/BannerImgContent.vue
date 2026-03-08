<script setup>
import FloorSign from '@/components/FloorSign.vue'
import HashTag from '@/components/HashTag.vue'
</script>

<template>
    <div class="
    m-auto mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-10 
    md:flex gap-3 
    sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[90%] 
    h-auto md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[400px]">
        <div class="relative bg-blue-100 
        w-full md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[55%] 
        h-[250px] md:h-auto">
            img
            <FloorSign></FloorSign>
        </div>
        <div class="mt-4 md:mt-0
        mx-5 md:mx-5 lg:mx-6 xl:mx-7 2xl:mx-8 text-[20px] 
        flex-1 flex flex-col 
        gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-3">
            <div class="font-bold text-[26px] md:text-[24px] lg:text-[27px] xl:text-[34px]">外野 A1–A9、B1–B3</div>
            <HashTag>帆布吊掛</HashTag>

                <div class="md:text-[20px] lg:text-[22px]">尺寸：</div>
                <div class="md:text-[20px] lg:text-[22px]">廣告樣式：</div>
                <div class="md:text-[20px] lg:text-[22px]">設置期間：</div>
                <div class="md:text-[20px] lg:text-[22px]">收費方式：</div>
                <div class="md:text-[20px] lg:text-[22px]">保證金：</div>
    
        </div>
    </div>

</template>

<style scoped></style>