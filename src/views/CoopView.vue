<script setup>
import { ref,  computed } from 'vue'
import { RouterLink } from 'vue-router' 
import BaseInput from '@/components/BaseInput.vue'
import BaseIcon from '@/components/BaseIcon.vue'  
import HashTag from '@/components/HashTag.vue'
import GeneralFrame from '@/components/GeneralFrame.vue'
import Swal from 'sweetalert2'
import { useBookmarkStore } from '@/composables/useBookmarkStore.js'
import { useRentalStore } from '@/composables/useRentalStore.js'

// 引入 Swiper 相關（保留你原本的）
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

// 表單資料 - 集中管理
const formData = ref({
  name: '',
  company: '',
  email: '',
  taxID: '',
  tel: '',
  address: '',
  date: '',
  time: '',
  people: ''
})

// 錯誤訊息
const errors = ref({})

// 收藏的場地資料
const { list } = useBookmarkStore()
const { state } = useRentalStore()
const bookmarkedItems = computed(() =>
  list.value.map((id) => ({ id, item: state.data[id] })).filter((x) => x.item)
)

// 輪播照片（你原本的）
const roomPhotos = [
  { id: 1, src: slide1, alt: 'concert1' },
  { id: 2, src: slide2, alt: 'baseball1' },
  { id: 3, src: slide3, alt: 'concert2' },
  { id: 4, src: slide4, alt: 'phD' },
  { id: 5, src: slide5, alt: 'fans' }
]

const modules = [Autoplay, Pagination, Navigation]

// 驗證函數
const validateForm = () => {
  const newErrors = {}
  
  // 姓名驗證
  if (!formData.value.name) {
    newErrors.name = '請輸入姓名'
  }
  
  // 公司驗證
  if (!formData.value.company) {
    newErrors.company = '請輸入公司名稱'
  }
  
  // Email 驗證
  if (!formData.value.email) {
    newErrors.email = '請輸入電子郵件'
  } else if (!formData.value.email.includes('@')) {
    newErrors.email = '請輸入有效的信箱（需包含 @）'
  }
  
  // 電話驗證（必填）
  if (!formData.value.tel) {
    newErrors.tel = '請輸入電話號碼'
  } else if (formData.value.tel.length !== 10) {
    newErrors.tel = '電話號碼需要10碼'
  }
  
  // 地址驗證（必填）
  if (!formData.value.address) {
    newErrors.address = '請輸入地址'
  }
  
  // 統一編號（選填，但如果填了要8碼）
  if (formData.value.taxID && formData.value.taxID.length !== 8) {
    newErrors.taxID = '統一編號需要8碼'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

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
      console.log('表單資料：', formData.value) // 這裡可以發 API
      Swal.fire({
        title: '已成功傳送！',
        text: '您的提案已成功傳送。',
        icon: 'success',
        confirmButtonColor: '#0D2953'
      })
    }
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <GeneralFrame titleLeft="合作" titleRight="提案">
      <div class="mt-5 h-auto w-full rounded-[16px] bg-white md:mt-15">
        <div class="p-5 md:p-15">
          
          <!-- ========== 基本資料區塊 ========== -->
          <div>
            <!-- 區塊標題（直接寫，因為只有兩個） -->
            <div class="text-[28px] font-bold tracking-widest md:text-[36px]">
              基本資料
              <span class="text-[#C62828]">*</span>
              <span class="text-[14px] md:text-[18px]">為必填資料，請填寫後送出</span>
            </div>
            
            <!-- 用 Grid 排版，自動適應 -->
            <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <BaseInput
                label="申請人姓名"
                required
                v-model="formData.name"
                placeholder="請輸入姓名"
              />
              
              <BaseInput
                label="公司行號 / 單位名稱"
                required
                v-model="formData.company"
                placeholder="請輸入公司名稱"
              />
              
              <BaseInput
                label="聯絡信箱"
                required
                type="email"
                v-model="formData.email"
                placeholder="example@gmail.com"
                :error="errors.email"
              />
              
              <BaseInput
                label="統一編號"
                v-model="formData.taxID"
                maxlength="8"
                placeholder="請輸入8碼統一編號"
                :error="errors.taxID"
              />
              
              <BaseInput
                label="聯絡電話"
                required
                type="tel"
                v-model="formData.tel"
                placeholder="0912345678"
                maxlength="10"
                :error="errors.tel"
              />
              
              <!-- address 佔兩欄 -->
              <div class="md:col-span-2">
                <BaseInput
                  label="通訊地址"
                  required
                  v-model="formData.address"
                  placeholder="請輸入地址"
                />
              </div>
            </div>
          </div>

          <!-- ========== 租借資料區塊 ========== -->
          <div class="mt-10">
            <!-- 區塊標題 -->
            <div class="text-[28px] font-bold tracking-widest md:text-[36px]">
              租借資料
            </div>
            
            <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <BaseInput
                label="預估租借日期"
                type="date"
                v-model="formData.date"
              />
              
              <BaseInput
                label="預估租借時間"
                v-model="formData.time"
                placeholder="例如：14:00-17:00"
              />
              
              <BaseInput
                label="預估人數"
                type="number"
                v-model="formData.people"
                placeholder="請輸入人數"
              />
            </div>
            
            <!-- 預估用途（特殊區塊，不是輸入框） -->
            <div class="mt-5">
              <div class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]">
                預估用途
              </div>
              <div class="mt-2 flex flex-wrap gap-3">
                <HashTag 
                  v-for="{ id, item } in bookmarkedItems" 
                  :key="id"
                >
                  {{ item.tag }}
                </HashTag>
              </div>
            </div>
            
            <!-- 預估位置（特殊區塊） -->
            <div class="mt-5">
              <div class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]">
                預估租借位置
              </div>
              <div class="mt-2 flex flex-wrap items-center gap-3">
                <RouterLink
                  to="area-rental"
                  class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center bg-gray-200 text-[24px]"
                >
                  +
                </RouterLink>
                <HashTag v-for="{ id, item } in bookmarkedItems" :key="id">
                  {{ item.name }}
                </HashTag>
              </div>
            </div>
          </div>

          <!-- ========== 備註 ========== -->
          <div class="mt-10">
            <label 
              for="note"
              class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
            >
              備註
            </label>
            <textarea
              id="note"
              v-model="formData.note"
              placeholder="如有任何問題歡迎備註，我們會盡快回覆。"
              class="mt-3 h-[300px] w-full resize-none rounded border border-gray-300 px-4 py-3 text-[18px] text-black outline-none placeholder:text-gray-500 focus:border-[#0D2953] focus:ring-1 focus:ring-[#0D2953] sm:text-[22px]"
            ></textarea>
          </div>

          <!-- ========== 送出按鈕區塊 ========== -->
          <div class="mt-10 flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-5">
            <div class="flex flex-col gap-5 md:flex-row">
              <div class="cursor-pointer p-3 text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] md:w-[200px] md:text-[16px] lg:w-[240px] lg:text-[20px]">
                進徹場說明手冊
                <BaseIcon name="teenyicons:pdf-solid" class="md:text-md ml-2 lg:text-2xl" />
                <BaseIcon name="subway:download-3" class="md:text-md ml-2 lg:text-2xl" />
              </div>
              <div class="cursor-pointer p-3 text-center shadow-[3px_3px_5px_rgba(0,0,0,0.4)] md:w-[200px] md:text-[16px] lg:w-[240px] lg:text-[20px]">
                合作同意說明書
                <BaseIcon name="teenyicons:pdf-solid" class="md:text-md ml-2 lg:text-2xl" />
                <BaseIcon name="subway:download-3" class="md:text-md ml-2 lg:text-2xl" />
              </div>
            </div>
            <button
              type="submit"
              class="flex cursor-pointer items-center justify-center px-5 py-3 shadow-[3px_3px_5px_rgba(0,0,0,0.4)] transition-all hover:bg-gray-50 active:scale-95 md:text-[16px] lg:text-[20px]"
            >
              送出提案
              <BaseIcon name="maki:arrow" class="md:text-md ml-2 lg:text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <!-- ========== 輪播（你原本的） ========== -->
      <div class="hidden p-5 sm:block md:p-8 lg:p-10 xl:p-15">
        <label class="border-l-2 border-white pl-3 text-[30px] text-white md:text-[46px] lg:text-[50px] xl:text-[56px]">
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
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            class="h-[400px] w-full text-white md:h-[500px] lg:h-[600px]"
          >
            <swiper-slide
              v-for="photo in roomPhotos"
              :key="photo.id"
              class="flex items-center justify-center transition-all duration-300"
            >
              <img :src="photo.src" :alt="photo.alt" class="h-full w-full rounded-lg object-cover" />
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
