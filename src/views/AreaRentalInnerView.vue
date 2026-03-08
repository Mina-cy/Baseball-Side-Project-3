<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useRentalStore } from "@/composables/useRentalStore.js"

import GeneralFrame from '@/components/GeneralFrame.vue';
import GoBack from '@/components/GoBack.vue'
import BookmarkBtn from '@/components/BookmarkBtn.vue'
import AreaImgContent from '@/components/AreaImgContent.vue'
import BriefIntro from '@/components/BriefIntro.vue'
import InnerSmallCard from '@/components/InnerSmallCard.vue'
import Note from '@/components/Note.vue'

const route = useRoute()
const { state } = useRentalStore()

const id = computed(() => String(route.params.id || ""))
const detail = computed(() => state.data?.[id.value] || null)
</script>

<template>
  <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="區域租借">
    <div class="w-full h-auto bg-white rounded-[16px]">
      <div class="relative bg-white h-auto w-full mt-5 m-auto rounded-xl px-10 pt-10 pb-20">
        
        <div v-if="detail">
          <div class="flex justify-between items-center">
            <GoBack />
            <BookmarkBtn :id="id" />
          </div>
          <AreaImgContent v-if="detail" :detail="detail" />

          <BriefIntro>簡介：
            <p class="indent-[2em]">{{ detail.description }}</p>
          </BriefIntro>

          <div class="m-auto flex flex-col md:flex-row justify-between w-full md:w-[90%] lg:w-[85%] xl:w-[90%] mt-10">
            <InnerSmallCard>
            用途：
        <div class="flex flex-wrap gap-3 mt-5">
            <div v-for="t in detail.tag.split('、')" :key="t" class="bg-black group-hover:bg-white group-hover:text-[#214F83] tracking-[4px]
               sm:text-[24px] text-[16px] font-bold inline-block text-white
               sm:px-6 sm:py-3 px-3 py-1 sm:rounded-[16px] rounded-[8px]">
                # {{ t }}
            </div>
        </div>
    </InnerSmallCard>
            <InnerSmallCard>提供設備：
              <p class="mt-5">{{ detail.equipment }}</p>
              </InnerSmallCard>
          </div>

          <Note>備註與其他：{{ detail.other ?? '' }}</Note>
        </div>

        <div v-else class="p-10 text-center">
          找不到這個場地資料（id: {{ id }}）
        </div>

      </div>
    </div>
  </GeneralFrame>
</template>


<style scoped>
</style>
