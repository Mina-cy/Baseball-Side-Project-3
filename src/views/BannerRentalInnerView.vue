<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import GoBack from '@/components/GoBack.vue'
import Bookmark from '@/components/Bookmark.vue'
import BannerImgContent from '@/components/BannerImgContent.vue'
import BriefIntro from '@/components/BriefIntro.vue'
import InnerSmallCard from '@/components/InnerSmallCard.vue'
import Note from '@/components/Note.vue'
</script>

<template>
    <!-- ----------背景部分--------- -->
    <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="廣告租借">
        <div class="w-full h-690 bg-white rounded-[16px]">

                <!-- 2. 內容層 -->
                    <div class="relative bg-white h-auto w-full mt-5 m-auto rounded-xl p-10">
                        <div class="flex justify-between items-center">
                            <GoBack></GoBack>
                            <Bookmark></Bookmark>
                        </div>
                        <BannerImgContent></BannerImgContent>
                        <BriefIntro>簡介：</BriefIntro>
                        <div
                            class="m-auto flex flex-col md:flex-row justify-between w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[90%] mt-10">
                            <!-- 加上 flex-1 讓兩個卡片平分剩餘空間 -->
                            <InnerSmallCard>廣告位置：</InnerSmallCard>
                            <InnerSmallCard>提供設備：</InnerSmallCard>
                        </div>
                        <Note>備注其他：</Note>
                    </div>
            </div>
        
    </GeneralFrame>
</template>

<style scoped>
/* 徹底移除 body 預設邊距 */
body {
    margin: 0;
    padding: 0;
}
</style>
