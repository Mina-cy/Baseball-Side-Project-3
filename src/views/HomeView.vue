<script setup>
	import BannerBtn from '@/components/BannerBtn.vue'
	import BannerVideo from '@/components/BannerVideo.vue'
	import BannerPic1 from '@/assets/img/banner-bg.png'
	import BannerText from '@/components/BannerText.vue'
	import SectionTitle from '@/components/SectionTitle.vue'
	import BaseIcon from "@/components/BaseIcon.vue"
	import searchBg from "@/assets/img/search-bg.png"
	import SearchBar from '@/components/SearchBar.vue'
	import NewsItem from "@/components/NewsItem.vue"
	import baseballField from "@/assets/img/baseball-stadium.png"
	import Swiper from "@/components/Swiper.vue"
	import MarqueeSwiper from "@/components/MarqueeSwiper.vue"
	import FieldSvg from "@/components/FieldSvg.vue"
	import FieldInnerSvg from "@/components/FieldInnerSvg.vue"
	import ParallaxSection from '@/components/ParallaxSection.vue'
	import calendar from "@/assets/img/calendar.svg"
	import FB from "@/assets/img/FB.svg"
	import { useRentalStore } from '@/composables/useRentalStore.js'
	import { ref, onMounted } from 'vue';
	const { state, filteredList, selectFilters } = useRentalStore()

	const showGuide = ref(false);
</script>
<template>
	<header class="relative">
		<div class="absolute
		top-160 sm:top-170 md:top-290 lg:top-320 xl:top-320 2xl:top-370 
		h-[5400px] sm:h-[5520px] md:h-[6300px] lg:h-[6300px] xl:h-[6000px] 2xl:h-[6200px] 
		w-[40px] md:w-[80px] lg:w-[90px] 2xl:w-[100px] z-60 ">
			<a target="_blank" href="https://www.facebook.com/TaichungIntercontinentalBaseballStadium/?locale=zh_TW">
				<img :src="FB" alt="FB" class="sticky top-70 mt-100">
			</a>
		</div>
		<!-- banner區域 -->
		<div class="relative w-full min-h-[600px] max-h-300">
			<img :src="BannerPic1" alt="Banner" class="hidden md:block w-full h-auto object-cover  
			min-h-[600px] md:min-h-[720px] lg:min-h-[800px] xl:h-[98%]">
			<!-- banner 左邊btn -->
			<div class="absolute flex md:flex-col items-center z-10
            left-[50%] -translate-[50%] md:left-[100px] lg:left-[110px] xl:left-[120px] 2xl:left-[130px]   
            gap-3 sm:gap-4 md:gap-5 top-170 sm:top-160 md:top-[205px] lg:top-[210px] xl:top-[220px] 2xl:top-[230px]">
				<a href="#rent">
					<BannerBtn>租借服務</BannerBtn>
				</a>
				<a href="#compaign">
					<BannerBtn>精彩賽事</BannerBtn>
				</a>
				<a href="#intro">
					<BannerBtn>場地介紹</BannerBtn>
				</a>
			</div>
			<BannerText></BannerText>
			<!-- 右邊影片 -->
			<BannerVideo></BannerVideo>
		</div>
	</header>
	<main>
		<!-- image slider -->
		<div class="hidden md:block w-full h-100 mt-10 overflow-hidden">
			<MarqueeSwiper></MarqueeSwiper>
		</div>
		<div class="relative w-full pt-70 sm:pt-80 md:pt-40 lg:pt-40 xl:pt-50 2xl:pt-50 md:py-20 lg:py-30 xl:py-40 2xl:py-50 md:py-50 px-[13px] sm:px-[clamp(13px,10vw,180px)] font-inter">
			<!-- ParallaxSection -->
			<ParallaxSection></ParallaxSection>
			<SectionTitle id="intro" left="場地" right="介紹" />
			<!-- field -->
			<div class="w-full h-auto mt-5 shadow-2xl p-8 md:p-12 xl:p-15 z-10 bg-white">
				<div class="w-full mb-5 md:mb-10 min-w-[100px] h-auto flex flex-col items-center">
					<div class="relative flex">
						<div class="w-12 md:w-16 lg:w-auto
					h-12 md:h-16 lg:h-[90%]
					aspect-1/1 top-[50%] -translate-y-[50%]
					flex items-center justify-center rounded-full bg-secondary font-bold 
					text-[20px] md:text-[30px] lg:text-[40px]  absolute 
					-left-6 md:-left-9 lg:-left-10 ">
							<p class="-translate-x-[10%]">1</p>
						</div>
						<span class="text-[20px] md:text-[30px] lg:text-[40px] 
					bg-[#D9D9D9] font-bold 
					pl-10 md:pl-14 
					pr-6 md:pr-8 
					py-2 md:py-3 tracking-[5px] md:tracking-[12px] 
					">棒球場 內場</span>
					</div>
					<div class="relative">
						<img :src="baseballField" alt="球場平面圖">
						<FieldSvg></FieldSvg>
					</div>
					<div class="flex justify-end mt-4">
						<div class="flex items-center gap-2 text-[12px] md:text-[18px] lg:text-[20px] text-black bg-white/80 px-3 py-2 rounded-lg shadow-sm">
							<BaseIcon name="mdi:compass" class="text-lg md:text-xl"></BaseIcon>
							<p>經緯度：E 120°41′9.1″　N 24°12′0.3″</p>
						</div>
					</div>
				</div>
				<hr class="w-full border-t border-2 border-dashed border-gray-400 my-10 md:my-14" />
				<div class="w-full mb-5 md:mb-10 min-w-[100px] h-auto flex flex-col items-center">
					<div class="relative flex mb-5">
						<div class="w-12 md:w-16 lg:w-auto
						h-12 md:h-16 lg:h-[90%]
						aspect-1/1 top-[50%] -translate-y-[50%]
						flex items-center justify-center rounded-full bg-secondary font-bold 
						text-[20px] md:text-[30px] lg:text-[40px]  absolute 
					-left-6 md:-left-9 lg:-left-10 ">2
						</div>
						<span class="text-[20px] md:text-[30px] lg:text-[40px]  
						bg-[#D9D9D9] font-bold 
						pl-10 md:pl-14 
						pr-6 md:pr-8 
						py-2 md:py-3 tracking-[5px]md:tracking-[12px] 
					">棒球場 外圍</span>
					</div>
					<div class="relative w-full">
						<FieldInnerSvg></FieldInnerSvg>
					</div>
					<div class="flex justify-end mt-4">
						<div class="flex items-center gap-2 text-[12px] md:text-[18px] lg:text-[20px] text-black bg-white/80 px-3 py-2 rounded-lg shadow-sm">
							<BaseIcon name="mdi:compass" class="text-lg md:text-xl"></BaseIcon>
							<p>經緯度：E 120°41′9.1″　N 24°12′0.3″</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full bg-white shadow-2xl mt-20 mb-40 flex flex-col items-center p-8 md:p-12 xl:p-15">
				<div class="w-full mb-5 md:mb-10 min-w-[100px] h-auto flex flex-col items-center">
					<div class="relative flex">
						<div class="w-12 md:w-16 lg:w-auto
									h-12 md:h-16 lg:h-[90%]
									aspect-1/1 top-[50%] -translate-y-[50%]
									flex items-center justify-center rounded-full bg-secondary font-bold 
									text-[20px] md:text-[30px] lg:text-[40px] absolute 
									-left-6 md:-left-9 lg:-left-10 ">3
						</div>
						<span class="text-[20px] md:text-[30px] lg:text-[40px]  
									bg-[#D9D9D9] font-bold 
									pl-10 md:pl-14 
									pr-6 md:pr-8 
									py-2 md:py-3 tracking-[5px] sm:tracking-[12px] 
									">多功能附屬運動中心</span>
					</div>
				</div>
				<p class="indent-[2em] text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] tracking-[4px] leading-[50px] font-medium mt-10">
					臺中洲際棒球場附屬多功能運動中心由「好運來洲際婚宴中心」營運，為結合運動、活動與城市地標功能的複合式場館。建築採用極具特色的薄殼結構工法，直徑約 70 公尺、高約 29
					公尺，外型宛如一顆蛋殼，因此被稱為「台中迷你蛋」。此工法透過充氣成型、鋼筋與噴灌水泥打造薄型殼體，兼具結構強度與輕盈視覺。雪梨歌劇院、倫敦大英博物館、北京奧運羽毛球館等世界級建築，亦皆運用相同的薄殼結構工法。
				</p>
				<button type="button" class="flex items-center justify-center self-end mt-2">
					<a href="http://www.lilo-park.com.tw/home.php?lang=tw" target="_blank"><img src="@/assets/img/lilo-center.png" alt="好運來Logo"></a>
					<div class="bg-[#C30D23] h-18 flex items-center pr-5 -translate-x-1">
						<BaseIcon name="mingcute:arrow-right-fill" class="text-[40px] text-white"></BaseIcon>
					</div>
				</button>
			</div>
			<!-- rental -->
			<SectionTitle left="租借" right="服務" id="rent" />
			<div class="w-full h-auto bg-cover bg-center bg-no-repeat text-white font-inter flex flex-col items-center
		p-13 xl:p-15 2xl:p-20 
		 mb-20" :style="{ backgroundImage: `url(${searchBg})` }">
				<p class="font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] mb-5">
					為每一個重要時刻，提供最到位的舞台！</p>
				<p class="text-[18px] lg:text-[20px] xl:text-[24px] mb-15">從現在開始，選擇容納人數與用途hashtag，一步一步，把想法變成一個真的會發生的畫面。
				</p>
				<SearchBar v-model:guests="state.guests" v-model:hashtag="state.hashtag" @search="selectFilters" />
			</div>
			<!-- News and Calendar -->
			<div class="relative w-full h-auto 
		mt-20 md:mt-40 
		flex flex-wrap xl:flex-nowrap 
		gap-5 md:gap-10 
		pb-10 xl:pb-20 font-inter items-start">
				<!-- News -->
				<div class="w-full xl:w-[50%] mb-10 xl:mb-0">
					<SectionTitle left="最新" right="消息" />
					<div class="flex flex-col mt-8 gap-2 sm:gap-4 md:gap-6 xl:gap-8">
						<NewsItem :item="{
							date: { year: '2026', md: '02.01' },
							title: '頑童MJ116主場，轟炸洲際！'
						}"></NewsItem>
						<NewsItem></NewsItem>
						<NewsItem :item="{
							date: { year: '2026', md: '01.10' },
							title: '洲際棒球場場館全面升級，迎接國際賽事！！'
						}"></NewsItem>
						<NewsItem :item="{
							date: { year: '2025', md: '12.12' },
							title: '優化觀眾動線、提升球場照明與 LED 大螢幕顯示效果'
						}"></NewsItem>
					</div>
				</div>
				<!-- Calendar -->
				<div class="w-full xl:w-[50%]">
					<p class="font-bold text-[50px] sm:text-[70px] md:text-[90px] lg:text-[96px] leading-none">
						<span class="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[96px] leading-none inline-block">場地租借</span>
						<span class=" text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] inline-block align-bottom">行事曆</span>
					</p>
					<div class="w-full h-[600px] mt-5 xl:mt-10 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${calendar})` }"></div>
				</div>
			</div>
			<div id="compaign" class="flex flex-col lg:flex-row mt-5 md:mt-20 gap-10 items-start w-full">
				<div class="w-auto shrink-0">
					<hr class="border-2 border-black xl:border-white w-20 lg:w-full h-1 mb-4" />
					<div class="flex font-bold items-start lg:items-stretch">
						<div class="grid place-items-center">
							<div class="text-black xl:text-white 
								text-[16px] sm:text-[26px] md:text-[36px] lg:text-[40px] 
								tracking-[10px] lg:tracking-[12px]
								[writing-mode:vertical-rl] mr-3">
								精彩
							</div>
						</div>
						<div class="text-black xl:text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[96px] tracking-[8px] lg:tracking-[15px] leading-none">
							賽事
						</div>
					</div>
				</div>
			</div>
			<div class="mx-auto mt-10 lg:mt-20 lg:w-[80%] h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
				<Swiper></Swiper>
			</div>
			<!-- ================= 區塊 3：影片影片 (1:1 比例) ================= -->
			<div class="flex flex-col lg:flex-row w-full py-10 lg:py-20 gap-6 lg:gap-20">
				<div class="w-full lg:w-1/2 aspect-video">
					<iframe class="w-full h-full rounded-xl" src="https://www.youtube.com/embed/ELg8zHp5q0A" allowfullscreen></iframe>
				</div>
				<div class="w-full lg:w-1/2 aspect-video">
					<iframe class="w-full h-full rounded-xl" src="https://www.youtube.com/embed/DyJPK7z6d1g" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</main>
</template>
<style scoped></style>