<script setup>
	import BaseIcon from "@/components/BaseIcon.vue"

const props = defineProps({
  guestPlaceholder: { type: String, default: '客納人數' },
  tagPlaceholder: { type: String, default: '用途hashtag' }
})

const guests = defineModel('guests', { type: [String, Number], default: '' })
const hashtag = defineModel('hashtag', { type: String, default: '' })

const emit = defineEmits(['search'])

function onGuestInput(e) {
  // 只保留數字
  const v = e.target.value.replace(/\D+/g, '')
  e.target.value = v
  guests.value = v
}

function submit() {
  emit('search', { guests: String(guests.value ?? ''), hashtag: hashtag.value })
}
</script>
<template>
	<div class="flex flex-col gap-4 justify-center sm:flex-row sm:items-center sm:gap-3 md:gap-4  lg:gap-5 w-full">
		<!-- 人數輸入（數字限定） -->
		<label class="inline-flex items-center h-16 bg-[#f3f3f3] border border-[#d9d9d9] rounded-sm overflow-hidden
         focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200
         w-full sm:w-auto">
			<span class="w-9 mx-2 h-full grid place-items-center text-gray-500">
				<BaseIcon name="mdi:account-group-outline" class="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]" />
			</span>
			<span class="h-full w-px bg-[#d9d9d9]"/>
			<input :value="guests" @input="onGuestInput" type="text" inputmode="numeric" pattern="[0-9]*" :placeholder="props.guestPlaceholder" 
			class="h-full flex-1 sm:w-44 bg-transparent px-3 
			text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]
         text-gray-700 placeholder:text-gray-400 outline-none" />
		</label>

		<!-- hashtag 輸入 -->
		<label class="inline-flex items-center h-16 bg-[#f3f3f3] border border-[#d9d9d9] rounded-sm overflow-hidden
         focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200
         w-full sm:w-auto">
			<span class="w-9  mx-2 h-full grid place-items-center text-gray-500">
				<BaseIcon name="mdi:pound" class=" text-[18px]" />
			</span>
			<span class="h-full w-px bg-[#d9d9d9]" />
			<input v-model="hashtag" type="text" :placeholder="props.tagPlaceholder" class="h-full flex-1 sm:w-52 bg-transparent px-3 
			text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 
         text-gray-700 placeholder:text-gray-400 outline-none" @keydown.enter.prevent="submit" />
		</label>

		<!-- 搜尋按鈕 -->
		<RouterLink to="/area-rental" class="min-w-[90px] inline-flex items-center justify-center gap-2
		 h-16 px-0 md:px-4 lg:px-6 rounded-sm
		 w-auto
         bg-red-600 text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-medium
         hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-200
         w-full sm:w-auto" @click="submit">
			<BaseIcon name="mdi:magnify" class=" text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] " />
			<p class="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] ">搜尋</p>
		</RouterLink>
	</div>
</template>