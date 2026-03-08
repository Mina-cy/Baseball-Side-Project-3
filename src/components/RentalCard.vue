<script setup>
import BookmarkBtn from "@/components/BookmarkBtn.vue"
import BaseIcon from "@/components/BaseIcon.vue"
import { computed } from "vue"

const props = defineProps({
	id: { type: String, required: true },
	name: { type: String, default: "辦公室-138" },
	tags: { type: Array, default: () => ["辦公室", "需要桌椅"] },
	floor: { type: String, default: "1F" },
	img: { type: String, default: "coop-slider-1.jpg" },
})


const imgSrc = computed(() =>
	`/json-image/${props.img}`
)

</script>
<template>
	<div
		class="w-full sm:h-full group 
		hover:bg-[#214F83] hover:text-white shadow-[2px_4px_10px_rgba(0,0,0,0.25)]
		flex flex-col font-inter 
		sm:py-[30px] py-3 px-8 ">
		<div class="flex justify-between items-center font-bold sm:mb-11 mb-2">
			<p class="text-[16px] md:text-[24px]">球場外圍</p>
			<BookmarkBtn :id="props.id" />
		</div>
		<img class="w-full h-auto aspect-11/7 object-cover sm:mb-6 mb-2 group-hover:rounded-[100px]" :src="imgSrc"
			:alt="name">
		<p class="sm:text-[32px] text-[20px] font-bold sm:mb-6 mb-2 tracking-[3px] truncate"> {{ name }} </p>
		<div class="flex flex-wrap gap-2 ">
			<div v-for="t in tags" :key="t" class="bg-black group-hover:bg-white group-hover:text-[#214F83] tracking-[px]
               text-[18px]  md:text-[20px] lg:text-[22px] xl:text-[24px] 
			   font-bold inline-block text-white
               px-3  md:px-6 py-2 md:py-3 
			   sm:rounded-[16px] rounded-[8px]">
				# {{ t }}
			</div>
		</div>
		<div class="flex justify-between items-center mt-auto sm:mt-[10px] pt-[5px] md:pt-3 text-[12px] sm:text-[18px] md:text-[24px]">
			<div
				class="w-10 md:w-15 h-10 md:h-15 flex items-center justify-center border-3 group-hover:border-white rounded-full font-bold tracking-[1px] 
				text-[12px] md:text-[20px]">
				{{ floor }}</div>
			<RouterLink :to="{ name: 'area-rental-inner', params: { id: props.id } }"
				class="font-bold group-hover:text-[#FF0000] cursor-pointer flex items-center no-underline">
				Read more
				<BaseIcon name="mingcute:arrow-right-fill" class="ml-1" />
			</RouterLink>
		</div>
	</div>
</template>
<style scoped></style>