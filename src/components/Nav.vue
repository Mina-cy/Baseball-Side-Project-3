<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBtn from '@/components/NavBtn.vue';
import Logo from '@/assets/img/logo.svg'
import NavBtnPhone from '@/components/NavBtnPhone.vue';
import BannerBgPhone from '@/assets/img/banner-bg-phone.svg'
import BaseIcon from '@/components/BaseIcon.vue';

// --- 電腦版專用 (Desktop) ---
const isAboutOpen = ref(false);
const aboutMenuRef = ref(null);
const isRentOpen = ref(false);
const rentMenuRef = ref(null);
const isTrafficOpen = ref(false);
const trafficMenuRef = ref(null);
const isFieldOpen = ref(false);
const fieldMenuRef = ref(null);

// 電腦版：處理 Nav 點擊
const handleNavClick = (tabName) => {
    if (tabName === 'about') {
        isAboutOpen.value = !isAboutOpen.value;

        if (isAboutOpen.value) {
            isRentOpen.value = false;
            isTrafficOpen.value = false;
            isFieldOpen.value = false;
        }
    } else if (tabName === 'rental') {
        isRentOpen.value = !isRentOpen.value;
        if (isRentOpen.value) {
            isAboutOpen.value = false;
            isTrafficOpen.value = false;
            isFieldOpen.value = false;
        }
    } else if (tabName === 'traffic') {
        isTrafficOpen.value = !isTrafficOpen.value;
        if (isTrafficOpen.value) {
            isAboutOpen.value = false;
            isRentOpen.value = false;
            isFieldOpen.value = false;
        }
    } else if (tabName === 'field') {
        isFieldOpen.value = !isFieldOpen.value;
        if (isFieldOpen.value) {
            isAboutOpen.value = false;
            isRentOpen.value = false;
            isTrafficOpen.value = false;
        }
    } else {
    
        isAboutOpen.value = false;
        isRentOpen.value = false;
        isTrafficOpen.value = false;
        isFieldOpen.value = false;
    }
};

// 點擊下拉選單項目時關閉下拉選單
const closeAllDropdowns = () => {
    isAboutOpen.value = false;
    isRentOpen.value = false;
    isTrafficOpen.value = false;
    isFieldOpen.value = false;
};

// --- 手機版專用 (Mobile) ---
const isMenuOpen = ref(false);
const isAboutExpanded = ref(false);
const isTrafficExpanded = ref(false);
const isFieldExpanded = ref(false);
const isRentalExpanded = ref(false);

// 手機版：處理清單點擊
const handlePhoneClick = (tabName) => {
    if (tabName === 'about') {
        isAboutExpanded.value = !isAboutExpanded.value;
    } else if (tabName === 'traffic') {
        isTrafficExpanded.value = !isTrafficExpanded.value;
    } else if (tabName === 'field') {
        isFieldExpanded.value = !isFieldExpanded.value;
    } else if (tabName === 'rental') {
        isRentalExpanded.value = !isRentalExpanded.value;
    } else {
        isMenuOpen.value = false;
    }
    
    const allExpandedStates = {
        isAboutExpanded, isTrafficExpanded, isFieldExpanded, isRentalExpanded
    };
    for (const key in allExpandedStates) {
        if (key !== `is${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Expanded` && 
            allExpandedStates[key].value === true) {
            allExpandedStates[key].value = false;
        }
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (!isMenuOpen.value) {
        // 關閉時重置所有展開狀態
        isAboutExpanded.value = false;
        isTrafficExpanded.value = false;
        isFieldExpanded.value = false;
        isRentalExpanded.value = false;
    }
};

const closeMenus = (e) => {
    if (aboutMenuRef.value && !aboutMenuRef.value.contains(e.target)) isAboutOpen.value = false;
    if (rentMenuRef.value && !rentMenuRef.value.contains(e.target)) isRentOpen.value = false;
    if (trafficMenuRef.value && !trafficMenuRef.value.contains(e.target)) isTrafficOpen.value = false;
    if (fieldMenuRef.value && !fieldMenuRef.value.contains(e.target)) isFieldOpen.value = false;
};

onMounted(() => window.addEventListener('click', closeMenus));
onUnmounted(() => window.removeEventListener('click', closeMenus));
</script>

<template>
    <nav id="nav" class="absolute top-0 left-0 w-full h-[80px] bg-transparent 
            flex items-center justify-between px-0 md:px-3 lg:px-4 py-5 z-30">
        <!-- ----------------logo----------------- -->
        <div class="mt-3">
            <RouterLink to="/" class="block" @click="closeAllDropdowns">
                <img :src="Logo" alt="Logo" class="pl-4 w-[220px] sm:w-[220px] md:w-[200px] lg:w-[230px]">
            </RouterLink>
        </div>
        
        <!-- -------------------Hamburger Menu------------------- -->
        <section v-if="isMenuOpen" class="fixed inset-0 z-40">
            <div class="md:hidden absolute w-full top-[10px] text-[22px] h-[730px] flex flex-col items-center">
                <!-- 圖片-->
                <img :src="BannerBgPhone" alt="" class="absolute scale-[1.05] w-full h-full object-cover z-0">

                <div class="relative z-10 mt-[55px] flex flex-col items-center w-full gap-0">
            
                    <NavBtnPhone route="/news" @click="handlePhoneClick('news')">最新消息</NavBtnPhone>

                    <!-- 關於洲際 -->
                    <NavBtnPhone @click="handlePhoneClick('about')" class="relative">關於洲際
                        <i
                            :class="['fa-solid absolute right-[15%]', isAboutExpanded ? 'fa-angle-up' : 'fa-angle-down']"></i>
                    </NavBtnPhone>
                    <div v-if="isAboutExpanded" class="flex flex-col w-full items-center bg-black/10">
                        <NavBtnPhone route="/about-field" @click="handlePhoneClick('about-field')">球場介紹</NavBtnPhone>
                        <NavBtnPhone route="/about-multi-function" @click="handlePhoneClick('about-multi-function')">
                            多功能運動中心</NavBtnPhone>
                    </div>

                    <!-- 交通資訊 -->
                    <NavBtnPhone @click="handlePhoneClick('traffic')" class="relative">交通資訊
                        <i
                            :class="['fa-solid absolute right-[15%]', isTrafficExpanded ? 'fa-angle-up' : 'fa-angle-down']"></i>
                    </NavBtnPhone>
                    <div v-if="isTrafficExpanded" class="flex flex-col w-full items-center bg-black/10">
                        <NavBtnPhone route="/traffic-info" @click="handlePhoneClick('traffic-info')">路線資訊</NavBtnPhone>
                        <NavBtnPhone route="/parking-lots" @click="handlePhoneClick('parking-lots')">停車場</NavBtnPhone>
                    </div>

                    <!-- 場地介紹-->
                    <NavBtnPhone @click="handlePhoneClick('field')" class="relative">場地介紹
                        <i
                            :class="['fa-solid absolute right-[15%]', isFieldExpanded ? 'fa-angle-up' : 'fa-angle-down']"></i>
                    </NavBtnPhone>
                    <div v-if="isFieldExpanded" class="flex flex-col w-full items-center bg-black/10">
                        <NavBtnPhone route="/field-area" @click="handlePhoneClick('field-info')">棒球場內場</NavBtnPhone>
                        <NavBtnPhone route="/field-bleacher" @click="handlePhoneClick('stands-info')">棒球場外圍
                        </NavBtnPhone>
                    </div>

                    <!-- 租借服務 -->
                    <NavBtnPhone @click="handlePhoneClick('rental')" class="relative">租借服務
                        <i
                            :class="['fa-solid absolute right-[15%]', isRentalExpanded ? 'fa-angle-up' : 'fa-angle-down']"></i>
                    </NavBtnPhone>
                    <div v-if="isRentalExpanded" class="flex flex-col w-full items-center bg-black/10">
                        <NavBtnPhone route="/area-rental" @click="handlePhoneClick('areaRental')">區域租借</NavBtnPhone>
                        <NavBtnPhone route="/banner-rental" @click="handlePhoneClick('bannerRental')">廣告租借</NavBtnPhone>
                    </div>

                    <!-- 一般按鈕 -->
                    <NavBtnPhone route="/coop" @click="handlePhoneClick('coop')">合作提案</NavBtnPhone>
                </div>
            </div>
        </section>

        <!-- --------------Nav 中間btn區 ------------------ -->
        <div>
            <div class="z-25 hidden md:flex">
                <!-- 無下拉選單的按鈕 -->
                <NavBtn route="/news" @click="handleNavClick('news')">最新消息</NavBtn>

                <!-- 關於洲際 + 下拉選單 -->
                <div class="relative shrink-0" ref="aboutMenuRef">
                    <!-- 使用 :isActive 來控制當下拉選單打開時的狀態 -->
                    <NavBtn 
                        @click="handleNavClick('about')"
                        :isActive="isAboutOpen"
                    >
                        關於洲際
                    </NavBtn>
                    <!-- 下拉選單內容 -->
                    <div v-if="isAboutOpen" class="absolute top-full left-0 flex flex-col bg-white shadow-xl z-40
                        whitespace-nowrap min-w-full w-max">
                        <NavBtn route="/about-field" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">球場介紹</NavBtn>
                        <NavBtn route="/about-multi-function" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">多功能運動中心</NavBtn>
                    </div>
                </div>

                <!-- 交通資訊區塊 -->
                <div class="relative shrink-0" ref="trafficMenuRef">
                    <NavBtn 
                        @click.stop="handleNavClick('traffic')"
                        :isActive="isTrafficOpen"
                    >
                        交通資訊
                    </NavBtn>
                    <!-- 下拉選單 -->
                    <div v-if="isTrafficOpen" class="absolute top-full left-0 flex flex-col bg-white shadow-xl z-40
                        whitespace-nowrap min-w-full w-max">
                        <NavBtn route="/traffic-info" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">
                            路線資訊
                        </NavBtn>
                        <NavBtn route="/parking-lots" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">
                            停車場
                        </NavBtn>
                    </div>
                </div>

                <!-- 場地介紹區塊 -->
                <div class="relative shrink-0" ref="fieldMenuRef">
                    <NavBtn 
                        @click.stop="handleNavClick('field')"
                        :isActive="isFieldOpen"
                    >
                        場地介紹
                    </NavBtn>
                    <!-- 下拉選單 -->
                    <div v-if="isFieldOpen" class="absolute top-full left-0 flex flex-col bg-white shadow-xl z-40
                        whitespace-nowrap min-w-full w-max">
                        <NavBtn route="/field-area" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">
                            球場內場
                        </NavBtn>
                        <NavBtn route="/field-bleacher" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">
                            球場外圍
                        </NavBtn>
                    </div>
                </div>

                <!-- 租借服務區塊 -->
                <div class="relative shrink-0" ref="rentMenuRef">
                    <NavBtn 
                        @click.stop="handleNavClick('rental')"
                        :isActive="isRentOpen"
                    >
                        租借服務
                    </NavBtn>
                    <!-- 下拉選單 -->
                    <div v-if="isRentOpen"
                        class="absolute top-full left-0 flex flex-col bg-white shadow-xl min-w-full z-40">
                        <NavBtn route="/area-rental" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">區域租借</NavBtn>
                        <NavBtn route="/banner-rental" class="!text-[#0D2953] custom-active"
                            @click="closeAllDropdowns">廣告租借</NavBtn>
                    </div>
                </div>
                
                <NavBtn route="/coop" @click="handleNavClick('coop')">合作提案</NavBtn>
            </div>
        </div>

        <!-- 網站導覽 +漢堡條 -->
        <div class="flex gap-1 items-center text-white">
            <BaseIcon name="material-symbols:map-outline-rounded" 
                class="ml-2 text-[26px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-white cursor-pointer 
                    transition-transform duration-200 
                    hover:scale-110 hover:bg-white/30 hover:text-[#0D2953]
                    active:!bg-white active:!text-[#0D2953]">
            </BaseIcon>
            <button @click="toggleMenu"
                class="z-40 md:hidden mr-3 text-2xl hover:opacity-80 transition-opacity duration-200">
                <font-awesome-icon :icon="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
            </button>
          
            <div class="hidden md:block">
                <div class="px-2 md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 
                    text-white hover:bg-white/30 hover:text-[#0D2953]
                    active:!bg-white active:!text-[#0D2953] cursor-pointer">EN</div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.custom-active:hover::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 10%;
    width: 80%;
    height: 2px;
    background-color: #0D2953;
    transition: all 0.3s;
}
</style>