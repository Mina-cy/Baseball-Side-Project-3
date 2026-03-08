<script setup>
import HashTag from '@/components/HashTag.vue';
import GeneralFrame from '@/components/GeneralFrame.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import Swal from 'sweetalert2';

// 引入 Swiper 相關
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '@/assets/img/coop-slider/coop-slider-1.jpg';
import slide2 from '@/assets/img/coop-slider/coop-slider-2.jpg';
import slide3 from '@/assets/img/coop-slider/coop-slider-3.jpg';
import slide4 from '@/assets/img/coop-slider/coop-slider-4.jpg';
import slide5 from '@/assets/img/coop-slider/coop-slider-5.png';
import { computed } from "vue"
import { useBookmarkStore } from "@/composables/useBookmarkStore.js"
import { useRentalStore } from "@/composables/useRentalStore.js"

const { list } = useBookmarkStore()
const { state } = useRentalStore()

const bookmarkedItems = computed(() =>
  list.value
    .map(id => ({ id, item: state.data[id] }))
    .filter(x => x.item)
)

const roomPhotos = [
    { id: 1, src: slide1, alt: 'concert1' },
    { id: 2, src: slide2, alt: 'baseball1' },
    { id: 3, src: slide3, alt: 'concert2' },
    { id: 4, src: slide4, alt: 'phD' },
    { id: 5, src: slide5, alt: 'fans' },
];

const modules = [Pagination, Navigation];

// 送出邏輯
const handleSubmit = () => {
    Swal.fire({
        title: "確定要送出提案嗎？",
        text: "送出後將有專人為您服務",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#0D2953",
        cancelButtonColor: "#C62828",
        confirmButtonText: "是的，送出！",
        cancelButtonText: "取消"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "已成功傳送！",
                text: "您的提案已成功傳送。",
                icon: "success",
                confirmButtonColor: "#0D2953"
            });
        }
    });
};
function onGuestInput(e) {
    // 只保留數字
    const v = e.target.value.replace(/\D+/g, '')
    e.target.value = v
    guests.value = v
}

</script>


<template>
    <form @submit.prevent="handleSubmit">
        <!-- ----------背景部分--------- -->
        <GeneralFrame titleLeft="合作" titleRight="提案">
            <div class="w-full h-auto bg-white rounded-[16px]">

                <!-- 2. 內容層 -->
                <div class="p-5 md:p-15">
                    <!-- -- -->
                    <div class="text-[28px] md:text-[36px] font-bold tracking-widest">
                        基本資料
                        <span class="text-[#C62828] ">*</span>
                        <span class="text-[14px] md:text-[18px]">為必填資料，請填寫後送出</span>
                    </div>
                    <!-- -- -->
                    <div class="mt-10 flex wrap items-start gap-5 ">
                        <div class="flex flex-col w-[45%]">
                            <label for="name" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3 ">
                                申請人姓名 <span class="text-[#C62828]">*</span>
                            </label>
                            <input required type="text" name="name" id="name"
                                class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">

                        </div>

                        <div class="flex flex-col flex-1">
                            <label for="company" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                公司行號 / 單位名稱<span class="text-[#C62828]">*</span>
                            </label>
                            <input required type="text" name="company" id="company"
                                class="text-[16px] md:text-[22px]  mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                        </div>
                    </div>
                    <!-- -- -->
                    <div class="flex mt-10 gap-3">
                        <div class="flex flex-col w-[35%]">
                            <label for="mail" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                聯絡信箱 <span class="text-[#C62828] ">*</span>
                            </label>
                            <div class="flex items-center gap-2 mt-2">
                                <input type="checkbox" name="copy" id="copy" class="w-4 h-4">
                                <label for="copy" class="text-[16px] cursor-pointer">副本到此信箱</label>
                            </div>
                            <input type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                title="請輸入有效的電子郵件地址，例如：example@gmail.com" 
                                required placeholder="請輸入電子郵件"
                                name="mail" id="mail"
                                class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                        </div>
                        <div class="flex flex-col flex-1 mt-8">
                            <label for="taxID" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                統一編號
                            </label>
                            <input type="text" name="taxID" id="taxID"
                                class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                        </div>
                        <div class="flex flex-col flex-1 mt-8">
                            <label for="tel" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                聯絡電話<span class="text-[#C62828] ">*</span>
                            </label>
                            <input required @input="onGuestInput" placeholder="09XX-XXX-XXX" type="tel" name="tel"
                                id="tel"
                                class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                        </div>
                    </div>
                    <!-- -- -->
                    <div class="flex flex-col flex-1 mt-8">
                        <label for="address" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                            通訊地址<span class="text-[#C62828] ">*</span>
                        </label>
                        <input required type="text" name="address" id="address"
                            class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                    </div>
                    <!-- -- -->
                    <div class="mt-10">
                        <div class="text-[28px] md:text-[36px] font-bold tracking-widest">
                            租借資料
                        </div>
                        <!-- -- -->
                        <div class="mt-10 flex items-start gap-5 ">
                            <div class="flex flex-col w-[45%]">
                                <label for="date" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                    預估租借日期
                                </label>
                                <input type="date" name="date" id="date"
                                    class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                            </div>

                            <div class="flex flex-col flex-1">
                                <label for="time" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                    預估租借時間
                                </label>
                                <input type="text" name="time" id="time"
                                    class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                            </div>
                        </div>
                        <!-- -- -->
                        <div class="mt-10 flex items-start gap-5 ">
                            <div class="flex flex-col w-[35%]">
                                <label for="number" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                    預估人數
                                </label>
                                <input type="number" name="number" id="number"
                                    class="text-[16px] md:text-[22px] mt-3 border border-gray-300 rounded px-2 py-1 w-full">
                            </div>

                            <div class="flex flex-col flex-1">
                                <div class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                    預估用途
                                </div>
                                <div class="mt-2 flex flex-col  md:flex-row gap-3 ">
                                    <HashTag v-for="{ id, item } in bookmarkedItems" :key="id"> {{ item.tag }} </HashTag>
                            </div>
                        </div>
                    </div>
                    <!-- -- -->
                    <div class=" mt-10 flex flex-col flex-1">
                                        <div class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                            預估租借位置
                                        </div>
                                        <div class="mt-2 gap-3 flex flex-col sm:flex-row w-fit">
                                            <RouterLink to="area-rental"
                                                class="bg-gray-200 w-[40px] h-[40px] text-[24px] text-center cursor-pointer">
                                                +
                                            </RouterLink>
                                            <HashTag v-for="{ id, item } in bookmarkedItems" :key="id"> {{ item.name }}</HashTag>
                                        </div>
                                </div>
                                <!-- -- -->
                                <div class="mt-10 flex flex-col flex-1">
                                    <label for="note" class="text-[18px] sm:text-[22px] border-l-2 border-black pl-3">
                                        備註
                                    </label>

                                    <!-- 改用 textarea 才能讓內容置頂 -->
                                    <textarea name="note" id="note" placeholder="如有任何問題歡迎備註，我們會盡快回覆。" class="mt-3 h-[300px] border border-gray-300 rounded px-4 py-3 w-full text-[18px] sm:text-[22px] resize-none outline-none 
                                    text-black placeholder:text-gray-500">
                                    </textarea>
                                </div>
                            </div>
                            <!-- -- -->
                            <div class="w-full sm:flex-row flex flex-col  sm:justify-between items-center mt-10 gap-2 sm:gap-5">
                                <div class="flex flex-col md:flex-row gap-5">
                                    <div class="md:w-[200px] lg:w-[240px] 
                                    md:text-[16px] lg:text-[20px] 
                                    p-3  text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] cursor-pointer">
                                        進徹場說明手冊
                                        <BaseIcon name="teenyicons:pdf-solid" class="ml-2 md:text-md lg:text-2xl">
                                        </BaseIcon>
                                        <BaseIcon name="subway:download-3" class="ml-2 md:text-md lg:text-2xl">
                                        </BaseIcon>
                                    </div>
                                    <div class="md:w-[200px] lg:w-[240px]
                                    md:text-[16px] lg:text-[20px] 
                                     p-3  text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] cursor-pointer">
                                        合作同意說明書
                                        <BaseIcon name="teenyicons:pdf-solid" class="ml-2 md:text-md lg:text-2xl">
                                        </BaseIcon>
                                        <BaseIcon name="subway:download-3" class="ml-2 md:text-md lg:text-2xl">
                                        </BaseIcon>
                                    </div>
                                </div>
                                <button type="submit" class="flex justify-center items-center 
                                 md:text-[16px] lg:text-[20px]  
                                 py-3 px-5 shadow-[3px_3px_5px_rgba(0,0,0,0.4)] cursor-pointer">
                                    送出提案
                                    <BaseIcon name="maki:arrow" class="ml-2 md:text-md lg:text-2xl"></BaseIcon>
                                </button>
                            </div>

                        </div>
                    </div>
                    <!-- ----精彩賽事---- -->
                    <div class="hidden sm:block p-5 md:p-8 lg:p-10 xl:p-15">
                        <label for="company"
                            class="text-white text-[30px] md:text-[46px] lg:text-[50px] xl:text-[56px] border-l-2 border-white pl-3">
                            精彩賽事
                        </label>
                        <div class="mt-5 w-full h-[500px]">
                            <swiper :modules="modules" :slides-per-view="1.5" :centered-slides="true"
                                :space-between="30" :loop="true" :navigation="true" :pagination="{ type: 'fraction' }"
                                class="w-full h-[400px] md:h-[500px] lg:h-[600px] text-white"
                                style=" --swiper-navigation-color: #FFFFFF;  --swiper-navigation-size: 50px;">
                                <swiper-slide v-for="photo in roomPhotos" :key="photo.id"
                                    class="flex justify-center items-center transition-all duration-300">
                                    <img :src="photo.src" :alt="photo.alt"
                                        class="w-full h-full object-cover rounded-lg">
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
        </GeneralFrame>
    </form>
</template>

<style scoped>
/* 徹底移除 body 預設邊距 */
body {
    margin: 0;
    padding: 0;
}
</style>
