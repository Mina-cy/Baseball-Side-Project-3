<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import trafficmap from '@/assets/img/trafficmap.svg';
import BaseIcon from '@/components/BaseIcon.vue';
import route1 from '@/assets/img/route1.svg';
import route2 from '@/assets/img/route2.png';
import route3 from '@/assets/img/route3.png';
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.2270988614146!2d120.68275282534987!3d24.19882467836711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917951156a4fd%3A0x4e48010d8fbdf059!2z6Ie65Lit5rSy6Zqb5qOS55CD5aC0!5e0!3m2!1szh-TW!2stw!4v1769610278605!5m2!1szh-TW!2stw";
</script>

<template>
    <GeneralFrame titleLeft="交通" titleRight="資訊" subTitle1="路線資訊">
        <div class="w-full h-auto bg-white rounded-[16px] mb-10">
            <div class="p-10 md:p-15">
                <!-- 第一部分：路線圖 -->
                <div class="mb-12">
                    <div class="text-[28px] md:text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                        路線資訊
                    </div>
                    <div class="mt-10">
                        <img :src="trafficmap" alt="交通路線圖" class="w-full h-auto object-contain">
                    </div>
                </div>

                <!-- 第二部分：Google Map -->
                <div class="mt-10">
                    <div class="flex flex-col md:flex-row gap-3 md:gap-15">
                        <div class="text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                            Google Map
                        </div>
                        <a target="_blank"
                            href="https://www.google.com/maps/place/%E8%87%BA%E4%B8%AD%E6%B4%B2%E9%9A%9B%E6%A3%92%E7%90%83%E5%A0%B4/@24.199429,120.683956,17z/data=!4m6!3m5!1s0x346917951156a4fd:0x4e48010d8fbdf059!8m2!3d24.1994288!4d120.6839558!16s%2Fm%2F025zbnw?hl=zh-TW&entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D">
                            <div
                                class="w-[200px] px-2 py-3 mt-5 md:mt-0 text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] cursor-pointer">
                                Link to Google Map
                                <BaseIcon name="maki:arrow" class="ml-2 md:text-md lg:text-2xl"></BaseIcon>
                            </div>
                        </a>
                    </div>

                    <div class="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border-none mt-8">
                        <iframe :src="mapUrl" class="w-full h-full border-0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                        周邊平面圖
                    </div>
                    <div class="flex justify-start items-center w-auto mt-5">
                        <BaseIcon name="ic:baseline-place" class="ml-2 text-2xl"></BaseIcon>
                        <span class=" text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]">406臺中市北屯區崇德路三段835號</span>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 lg:gap-5 mt-10 w-full">
                        <img :src="route1" alt="route1" class="w-full md:w-[70%] h-auto rounded-lg object-cover">

                        <div class="flex flex-row md:flex-col gap-2 lg:gap-5 flex-1">
                            <!-- 移除固定 w-[300px]，改用百分比或 w-full 配合 flex-1 -->
                            <img :src="route2" alt="route2" class="w-1/2 md:w-full h-auto rounded-lg object-cover">
                            <img :src="route3" alt="route3" class="w-1/2 md:w-full h-auto rounded-lg object-cover">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </GeneralFrame>
</template>


<style scoped></style>