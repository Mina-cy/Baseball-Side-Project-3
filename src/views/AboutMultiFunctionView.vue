<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import aboutmultifunction from '@/assets/img/aboutmultifunction.svg'
import lilologo from '@/assets/img/lilologo.svg'
</script>

<template>
    <GeneralFrame titleLeft="關於" titleRight="洲際" subTitle1="附屬多功能運動中心">
        <div class="w-full mt-5 md:mt-15 bg-white rounded-[16px]">
            <div class="p-10 md:p-15">
                <div class="text-[28px] md:text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                    附屬多功能運動中心
                </div>
                <div class=" w-full flex justify-center gap-4 mt-10">
                    <div class="w-full xl:w-[60%] shrink-0">
                        <img :src="aboutmultifunction" alt="aboutfield" class="w-full">
                        <div class="mt-5 ">
                            <p>關於多功能運動中心租借使用的相關訊息請洽(04)2422-8809</p>
                            <p>相關訊息請見好運來官方網站 https://tinyurl.com/ya9ddnb9 </p>
                        </div>
                    </div>
                    
                </div>
                 <div
                        class=" whitespace-pre-wrap  mt-10 p-10 flex flex-col flex-1 text-[16px] sm:text-[24px] xl:text-[22px] 2xl:text-[26px]">
                        <p class="indent-[2em]">
                            臺中洲際棒球場附屬多功能運動中心由「好運來洲際婚宴中心」營運，為結合運動、活動與城市地標功能的複合式場館。建築採用極具特色的薄殼結構工法，直徑約 70 公尺、高約 29
                            公尺，外型宛如一顆蛋殼，因此被稱為「台中迷你蛋」。此工法透過充氣成型、鋼筋與噴灌水泥打造薄型殼體，兼具結構強度與輕盈視覺。雪梨歌劇院、倫敦大英博物館、北京奧運羽毛球館等世界級建築，亦皆運用相同的薄殼結構工法。
                        </p>
                        <br>
                        <a href="http://www.lilo-park.com.tw/home.php?lang=tw" target="_blank"
                            class="flex self-end w-[120px] md:w-[150px] lg:w-[200px] cursor-pointer">
                            <img :src="lilologo" alt="lilologo">
                        </a>
                    </div>
            </div>
        </div>
    </GeneralFrame>
</template>

<style scoped></style>