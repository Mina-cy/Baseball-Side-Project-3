<script setup>
import footerImg from "@/assets/img/footer.png"
import BaseIcon from "@/components/BaseIcon.vue"
import CPBL from '@/assets/img/CPBL.svg'
import gotop from '@/assets/img/gotop.svg'
import accessibility from '@/assets/img/accessibility.svg'
</script>

<template>
	<footer class="relative w-full h-auto bg-cover bg-center bg-no-repeat text-white font-inter"
		:style="{ backgroundImage: `url(${footerImg})` }">
		<a href="#nav"><img :src="gotop" alt="gotop" class="absolute w-[130px] md:w-[160px] top-20 md:top-10 right-0 sm:right-10"></a>
		<div class="pl-3 sm:pl-22 md:pl-45 pt-45 pb-20 ">
			<!-- title -->
			<p class="text-[40px] font-bold tracking-wider">臺中洲際棒球場</p>
			<p class="text-[18px] font-bold tracking-wider">Taichung Intercontinental Baseball Stadium</p>

			<div class="flex text-[22px] sm:text-[24px] flex-wrap gap-15 mt-8">
				<!-- info -->
				<address class="not-italic">
					<hr class="bg-white w-full h-1 mb-4" />
					<div class="flex justify-start items-center gap-3">
						<BaseIcon name="mi:location" class="text-[20px] lg:text-[28px] "></BaseIcon>
						<p class="text-[20px] lg:text-[28px]">406 台中市北屯區崇德路三段835號</p>
					</div>
					<div class="flex justify-start items-center gap-3 mt-3">
						<BaseIcon name="basil:phone-outline" class="text-[20px] lg:text-[28px]"></BaseIcon>
						<p class="text-[20px] lg:text-[28px]">(04) 2422-1588</p>
					</div>
					<div class="flex justify-start items-center gap-3 mt-3">
						<BaseIcon name="material-symbols:mail-outline-rounded" class="text-[20px] lg:text-[28px]"></BaseIcon>
						<p class="text-[20px] lg:text-[28px]">yuying.tseng@tibs.com.tw</p>
					</div>
				</address>
				<!-- actions -->
				<nav>
					<hr class="bg-white w-50 h-1 mb-4" />
					<button class="block flex items-center gap-3 cursor-pointer">
						<BaseIcon name="ic:outline-message" class="text-[28px]"></BaseIcon>
						<a href="http://www.tibs.com.tw/contact/feedback.html" target="_blank">
							<p>意見回饋表單</p>
						</a>
					</button>
					<button class="block  flex items-center gap-3 mt-3 cursor-pointer">
						<BaseIcon name="mingcute:question-fill" class="text-[28px]"></BaseIcon>
						<a href="http://www.tibs.com.tw/question/itemlist/category/27.html" target="_blank">
							<p>常見問題</p>
						</a>
					</button>
					<a href="https://www.cpbl.com.tw/" target="_blank"><img :src="CPBL" alt="CPBL"></a>
				</nav>
			</div>
			<div class="mt-10 flex flex-wrap items-center gap-10">
				<div class="flex items-center gap-5 text-[30px]">
					<a href="https://www.facebook.com/TaichungIntercontinentalBaseballStadium/?locale=zh_TW"
						target="_blank">
						<BaseIcon name="uiw:facebook" class="cursor-pointer"></BaseIcon>
					</a>
					<a href="https://www.instagram.com/explore/locations/319656908400728/taichung-intercontinental-baseball-stadium/?hl=zh-tw"
						target="_blank">
						<BaseIcon name="cib:instagram" class="cursor-pointer"></BaseIcon>
					</a>
					<a href="https://www.youtube.com/watch?v=ajugeOaR5nI" target="_blank">
						<BaseIcon name="mdi:youtube" class="cursor-pointer text-[40px]"></BaseIcon>
					</a>
					<hr class=" bg-white w-full h-1" />
				</div>

				<div class="flex flex-wrap items-center gap-5">

					<p class="font-bold text-[24px]">Follow us</p>
					<p class="text-[18px] mt-1">2026 © 臺中洲際棒球場版權所有</p>
					<img :src="accessibility" alt="accessibility" class="w-[150px]">
				</div>

			</div>
		</div>
	</footer>
</template>
