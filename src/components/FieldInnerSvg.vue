<script setup>
	import FieldInnerSvgB1 from "@/components/FieldInnerSvgB1.vue"
	import FieldInnerSvg1F from "@/components/FieldInnerSvg1F.vue"
	import FieldInnerSvg2F from "@/components/FieldInnerSvg2F.vue"
	import FieldInnerSvg3F from "@/components/FieldInnerSvg3F.vue"
	import FieldInnerSvg3_5F from "@/components/FieldInnerSvg3_5F.vue"
	import FieldBg from "@/assets/img/baseball-stadium.png"
	import { ref } from 'vue';

	const floor = ref('1F');

	function toggleFloor(f){
		floor.value = f;
	}
</script>

<template>
	<div class="flex w-full h-auto justify-center">
		<div class="flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center">
			<button type="button" :class="floor === '3.5F' ? 'bg-[#0C1A36]' : 'bg-secondary'" class="w-18 md:w-20 lg:w-22 text-white  text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] hover:opacity-75 font-bold flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)]" @click="toggleFloor('3.5F')">3.5F</button>
			<button type="button" :class="floor === '3F' ? 'bg-[#0C1A36]' : 'bg-secondary'" class="w-18 md:w-20 lg:w-22 text-white  text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] hover:opacity-75 font-bold flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)]" @click="toggleFloor('3F')">3F</button>
			<button type="button" :class="floor === '2F' ? 'bg-[#0C1A36]' : 'bg-secondary'" class="w-18 md:w-20 lg:w-22 text-white  text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] hover:opacity-75 font-bold flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)]" @click="toggleFloor('2F')">2F</button>
			<button type="button" :class="floor === '1F' ? 'bg-[#0C1A36]' : 'bg-secondary'" class="w-18 md:w-20 lg:w-22 text-white  text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] hover:opacity-75 font-bold flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)]" @click="toggleFloor('1F')">1F</button>
			<button type="button" :class="floor === 'B1F' ? 'bg-[#0C1A36]' : 'bg-secondary'" class="w-18 md:w-20 lg:w-22 text-white  text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] hover:opacity-75 font-bold flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)]" @click="toggleFloor('B1F')">B1F</button>
		</div>
		<div class="relative w-[1366px] z-1">
			<img :src="FieldBg" class="absolute -z-1 w-full h-auto" >
			<FieldInnerSvgB1 v-if="floor === 'B1F'"></FieldInnerSvgB1>
			<FieldInnerSvg1F v-if="floor === '1F'"></FieldInnerSvg1F>
			<FieldInnerSvg2F v-if="floor === '2F'"></FieldInnerSvg2F>
			<FieldInnerSvg3F v-if="floor === '3F'"></FieldInnerSvg3F>
			<FieldInnerSvg3_5F v-if="floor === '3.5F'"></FieldInnerSvg3_5F>
		</div>
	</div>
</template>
<style scoped>

</style>

