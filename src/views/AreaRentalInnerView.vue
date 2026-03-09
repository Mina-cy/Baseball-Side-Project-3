<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRentalStore } from '@/composables/useRentalStore.js'

import GeneralFrame from '@/components/GeneralFrame.vue'
import GoBack from '@/components/GoBack.vue'
import BookmarkBtn from '@/components/BookmarkBtn.vue'
import AreaImgContent from '@/components/AreaImgContent.vue'
import BriefIntro from '@/components/BriefIntro.vue'
import InnerSmallCard from '@/components/InnerSmallCard.vue'
import Note from '@/components/Note.vue'

const route = useRoute()
const { state } = useRentalStore()

const id = computed(() => String(route.params.id || ''))
const detail = computed(() => state.data?.[id.value] || null)
</script>

<template>
  <GeneralFrame titleLeft="租借" titleRight="服務" subTitle1="區域租借">
    <div class="md:mt-15 mt-5 h-auto w-full rounded-[16px] bg-white">
      <div
        class="relative m-auto mt-5 h-auto w-full rounded-xl bg-white px-10 pb-20 pt-10"
      >
        <div v-if="detail">
          <div class="flex items-center justify-between">
            <GoBack />
            <BookmarkBtn :id="id" />
          </div>
          <AreaImgContent v-if="detail" :detail="detail" />

          <BriefIntro
            >簡介：
            <p class="indent-[2em]">{{ detail.description }}</p>
          </BriefIntro>

          <div
            class="m-auto mt-10 flex w-full flex-col justify-between md:w-[90%] md:flex-row lg:w-[85%] xl:w-[90%]"
          >
            <InnerSmallCard>
              用途：
              <div class="mt-5 flex flex-wrap gap-3">
                <div
                  v-for="t in detail.tag.split('、')"
                  :key="t"
                  class="inline-block rounded-[8px] bg-black px-3 py-1 text-[16px] font-bold tracking-[4px] text-white group-hover:bg-white group-hover:text-[#214F83] sm:rounded-[16px] sm:px-6 sm:py-3 sm:text-[24px]"
                >
                  # {{ t }}
                </div>
              </div>
            </InnerSmallCard>
            <InnerSmallCard
              >提供設備：
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
