<script setup>
import GeneralFrame from '@/components/GeneralFrame.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import parkinglotsmap from '@/assets/img/parkinglotsmap.svg'
import parkingfee1 from '@/assets/img/parkingfee1.svg'
import parkingfee2 from '@/assets/img/parkingfee2.svg'
const mapUrl2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.2631249915844!2d120.68042435219404!3d24.1975625158697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d8e651e85f%3A0x7722babb9961e891!2z6Ie65Lit5rSy6Zqb5qOS55CD5aC06ZmE5bGs5YGc6LuK5aC0!5e0!3m2!1szh-TW!2stw!4v1769614109068!5m2!1szh-TW!2stw";
</script>

<template>
    <GeneralFrame titleLeft="交通" titleRight="資訊" subTitle1="附屬停車場">
        <div class="w-full h-auto bg-white rounded-[16px] mb-10">
            <div class="p-10 md:p-15">
                <div class="flex flex-wrap md:flex-nowrap gap-8">
                    <div>
                        <div class="text-[28px] md:text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                            停車場平面圖
                        </div>
                        <div class="flex flex-col mt-5">
                            <div class="flex items-center text-[16px] md:text-[24px] ">
                                <BaseIcon name="ic:baseline-place" class="ml-2 text-2xl"></BaseIcon>
                                <span>臺中市北屯區四民里崇德路3段831號</span>
                            </div>
                            <img :src="parkinglotsmap" alt="parkinglotsmap" class="mt-5 w-[650px]">
                        </div>
                        <div class="mt-10">
                    <div class="text-[28px] md:text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                        停車場資訊
                    </div>
                    <div class="flex flex-col ml-5 mt-5 text-[16px] md:text-[24px]">
                        <span>營業時間：24小時</span>
                        <span>聯絡電話：04-24225784</span>
                        <span>實際停車格數量：</span>
                        <span>汽車車位：1216 機車車位：2735</span>
                        <span>收費設備：悠遊卡 /車牌辨識系統 /e-Tag</span>
                        <span class="text-[#C62828]">目前由俥亭停車事業股份有限公司承租營運管理</span>
                    </div>

                </div>
                    </div>
                    <div>
                        <div class="text-[28px] md:text-[36px] border-l-2 border-black pl-3 leading-none block font-bold">
                            收費方式
                        </div>
                        <div class="flex flex-col mt-5">
                            <span class="flex items-center text-[16px] md:text-[24px]">備註：本資訊僅供參考，請依現場收費方式為主</span>
                            <img :src="parkingfee1" alt="parkinglotsmap" class="mt-5 w-[650px]">
                            <img :src="parkingfee2" alt="parkinglotsmap" class="mt-15 w-[650px]">
                        </div>
                    </div>
                </div>
                
                <div class="mt-10">
                    <div class="text-[28px] md:text-[36px]  border-l-2 border-black pl-3 leading-none block font-bold">
                       Google Map
                    </div>
                    <div class="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border-none mt-8">
                        <iframe :src="mapUrl2" class="w-full h-full border-0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </GeneralFrame>
</template>


<style scoped></style>