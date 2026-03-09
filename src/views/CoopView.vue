<script setup>
import HashTag from '@/components/HashTag.vue'
import GeneralFrame from '@/components/GeneralFrame.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import Swal from 'sweetalert2'

// 引入 Swiper 相關
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import slide1 from '@/assets/img/coop-slider/coop-slider-1.jpg'
import slide2 from '@/assets/img/coop-slider/coop-slider-2.jpg'
import slide3 from '@/assets/img/coop-slider/coop-slider-3.jpg'
import slide4 from '@/assets/img/coop-slider/coop-slider-4.jpg'
import slide5 from '@/assets/img/coop-slider/coop-slider-5.png'
import { computed } from 'vue'
import { useBookmarkStore } from '@/composables/useBookmarkStore.js'
import { useRentalStore } from '@/composables/useRentalStore.js'

const { list } = useBookmarkStore()
const { state } = useRentalStore()

const bookmarkedItems = computed(() =>
  list.value.map((id) => ({ id, item: state.data[id] })).filter((x) => x.item)
)

const roomPhotos = [
  { id: 1, src: slide1, alt: 'concert1' },
  { id: 2, src: slide2, alt: 'baseball1' },
  { id: 3, src: slide3, alt: 'concert2' },
  { id: 4, src: slide4, alt: 'phD' },
  { id: 5, src: slide5, alt: 'fans' }
]

const modules = [Autoplay, Pagination, Navigation]

// 送出邏輯
const handleSubmit = () => {
  Swal.fire({
    title: '確定要送出提案嗎？',
    text: '送出後將有專人為您服務',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0D2953',
    cancelButtonColor: '#C62828',
    confirmButtonText: '是的，送出！',
    cancelButtonText: '取消'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '已成功傳送！',
        text: '您的提案已成功傳送。',
        icon: 'success',
        confirmButtonColor: '#0D2953'
      })
    }
  })
}
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
      <div class="mt-5 h-auto w-full rounded-[16px] bg-white md:mt-15">
        <!-- 2. 內容層 -->
        <div class="p-5 md:p-15">
          <!-- -- -->
          <div class="text-[28px] font-bold tracking-widest md:text-[36px]">
            基本資料
            <span class="text-[#C62828]">*</span>
            <span class="text-[14px] md:text-[18px]"
              >為必填資料，請填寫後送出</span
            >
          </div>
          <!-- -- -->
          <div class="wrap mt-10 flex items-start gap-5">
            <div class="flex w-[45%] flex-col">
              <label
                for="name"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                申請人姓名 <span class="text-[#C62828]">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label
                for="company"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                公司行號 / 單位名稱<span class="text-[#C62828]">*</span>
              </label>
              <input
                required
                type="text"
                name="company"
                id="company"
                class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
              />
            </div>
          </div>
          <!-- -- -->
          <div class="mt-10 flex gap-3">
            <div class="flex w-[35%] flex-col">
              <label
                for="mail"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                聯絡信箱 <span class="text-[#C62828]">*</span>
              </label>
              <div class="mt-2 flex items-center gap-2">
                <input type="checkbox" name="copy" id="copy" class="h-4 w-4" />
                <label for="copy" class="cursor-pointer text-[16px]"
                  >副本到此信箱</label
                >
              </div>
              <input
                type="text"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="請輸入有效的電子郵件地址，例如：example@gmail.com"
                required
                placeholder="請輸入電子郵件"
                name="mail"
                id="mail"
                class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
              />
            </div>
            <div class="mt-8 flex flex-1 flex-col">
              <label
                for="taxID"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                統一編號
              </label>
              <input
                type="text"
                name="taxID"
                id="taxID"
                class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
              />
            </div>
            <div class="mt-8 flex flex-1 flex-col">
              <label
                for="tel"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                聯絡電話<span class="text-[#C62828]">*</span>
              </label>
              <input
                required
                @input="onGuestInput"
                placeholder="09XX-XXX-XXX"
                type="tel"
                name="tel"
                id="tel"
                class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
              />
            </div>
          </div>
          <!-- -- -->
          <div class="mt-8 flex flex-1 flex-col">
            <label
              for="address"
              class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
            >
              通訊地址<span class="text-[#C62828]">*</span>
            </label>
            <input
              required
              type="text"
              name="address"
              id="address"
              class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
            />
          </div>
          <!-- -- -->
          <div class="mt-10">
            <div class="text-[28px] font-bold tracking-widest md:text-[36px]">
              租借資料
            </div>
            <!-- -- -->
            <div class="mt-10 flex items-start gap-5">
              <div class="flex w-[45%] flex-col">
                <label
                  for="date"
                  class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
                >
                  預估租借日期
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
                />
              </div>

              <div class="flex flex-1 flex-col">
                <label
                  for="time"
                  class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
                >
                  預估租借時間
                </label>
                <input
                  type="text"
                  name="time"
                  id="time"
                  class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
                />
              </div>
            </div>
            <!-- -- -->
            <div class="mt-10 flex items-start gap-5">
              <div class="flex w-[35%] flex-col">
                <label
                  for="number"
                  class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
                >
                  預估人數
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] md:text-[22px]"
                />
              </div>

              <div class="flex flex-1 flex-col">
                <div
                  class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
                >
                  預估用途
                </div>
                <div class="mt-2 flex flex-col gap-3 md:flex-row">
                  <HashTag v-for="{ id, item } in bookmarkedItems" :key="id">
                    {{ item.tag }}
                  </HashTag>
                </div>
              </div>
            </div>
            <!-- -- -->
            <div class="mt-10 flex flex-1 flex-col">
              <div
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                預估租借位置
              </div>
              <div class="mt-2 flex w-fit flex-col gap-3 sm:flex-row">
                <RouterLink
                  to="area-rental"
                  class="h-[40px] w-[40px] cursor-pointer bg-gray-200 text-center text-[24px]"
                >
                  +
                </RouterLink>
                <HashTag v-for="{ id, item } in bookmarkedItems" :key="id">
                  {{ item.name }}</HashTag
                >
              </div>
            </div>
            <!-- -- -->
            <div class="mt-10 flex flex-1 flex-col">
              <label
                for="note"
                class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
              >
                備註
              </label>

              <!-- 改用 textarea 才能讓內容置頂 -->
              <textarea
                name="note"
                id="note"
                placeholder="如有任何問題歡迎備註，我們會盡快回覆。"
                class="mt-3 h-[300px] w-full resize-none rounded border border-gray-300 px-4 py-3 text-[18px] text-black outline-none placeholder:text-gray-500 sm:text-[22px]"
              >
              </textarea>
            </div>
          </div>
          <!-- -- -->
          <div
            class="mt-10 flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-5"
          >
            <div class="flex flex-col gap-5 md:flex-row">
              <div
                class="cursor-pointer p-3 text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] md:w-[200px] md:text-[16px] lg:w-[240px] lg:text-[20px]"
              >
                進徹場說明手冊
                <BaseIcon
                  name="teenyicons:pdf-solid"
                  class="md:text-md ml-2 lg:text-2xl"
                >
                </BaseIcon>
                <BaseIcon
                  name="subway:download-3"
                  class="md:text-md ml-2 lg:text-2xl"
                >
                </BaseIcon>
              </div>
              <div
                class="cursor-pointer p-3 text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] md:w-[200px] md:text-[16px] lg:w-[240px] lg:text-[20px]"
              >
                合作同意說明書
                <BaseIcon
                  name="teenyicons:pdf-solid"
                  class="md:text-md ml-2 lg:text-2xl"
                >
                </BaseIcon>
                <BaseIcon
                  name="subway:download-3"
                  class="md:text-md ml-2 lg:text-2xl"
                >
                </BaseIcon>
              </div>
            </div>
            <button
              type="submit"
              class="flex cursor-pointer items-center justify-center px-5 py-3 shadow-[3px_3px_5px_rgba(0,0,0,0.4)] md:text-[16px] lg:text-[20px]"
            >
              送出提案
              <BaseIcon
                name="maki:arrow"
                class="md:text-md ml-2 lg:text-2xl"
              ></BaseIcon>
            </button>
          </div>
        </div>
      </div>
      <!-- ----精彩賽事---- -->
      <div class="hidden p-5 sm:block md:p-8 lg:p-10 xl:p-15">
        <label
          for="company"
          class="border-l-2 border-white pl-3 text-[30px] text-white md:text-[46px] lg:text-[50px] xl:text-[56px]"
        >
          精彩賽事
        </label>
        <div class="mt-5 h-[500px] w-full">
          <swiper
            :modules="modules"
            :slides-per-view="1.5"
            :centered-slides="true"
            :space-between="30"
            :loop="true"
            :navigation="true"
            :pagination="{ type: 'fraction' }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true, 
              pauseOnMouseEnter: true 
            }"
            class="h-[400px] w-full text-white md:h-[500px] lg:h-[600px]"
          >
            <swiper-slide
              v-for="photo in roomPhotos"
              :key="photo.id"
              class="flex items-center justify-center transition-all duration-300"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="h-full w-full rounded-lg object-cover"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </GeneralFrame>
  </form>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
