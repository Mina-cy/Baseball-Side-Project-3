<template>
  <div class="absolute top-0 left-0 w-full">
    <!-- 固定比例容器，讓 absolute 的 % 定位會跟著縮放 -->
    <div class="relative w-full aspect-[1366/768]">
      <!-- === 主場地 SVG === -->
      <svg viewBox="0 0 1366 768" class="absolute inset-0 w-full h-full z-10">
        <!-- outer 上半 -->
        <g @pointerenter="setHover('outer')" @pointerleave="setHover(null)">
          <path d="M734.49 85.3503L726.72 106.39L726.62 106.64L720.8 122.41L710.55 151.02L710.4 151.45C701.4 150.45 685.67 150.15 685.67 150.15C685.67 150.15 672.77 150.15 663.72 150.94H663.7C662.91 151.06 662.14 151.19 661.4 151.34L661.28 151.02C661.23 151.02 661.17 151.03 661.12 151.03L655.91 136.92L642.01 99.3103L636.56 84.5703C485.44 105.48 369.5 226.81 369.5 373.37C369.5 376.61 373.58 379.58 381.08 382.29L387.4 383.34H387.43C387.43 383.34 389.99 383.1 393.99 382.53C395.59 382.15 419.43 378.22 440.94 371.93C441.09 371.89 441.24 371.84 441.4 371.79C451.36 368.87 462.45 365.22 474.47 360.69C480.84 358.29 487.48 355.64 494.34 352.71C494.34 352.71 493.61 273.54 591.61 225.54C689.61 181.54 777.68 225.2 777.68 225.2C875.68 273.2 874.95 352.37 874.95 352.37L892.28 363.85C895.53 362.9 930.4 371.34 930.4 371.34C930.4 371.34 981.44 384.15 981.4 383.51L981.54 383.54C991.18 380.5 996.5 377.11 996.5 373.37C996.5 228.17 883.54 107.91 734.49 85.3503Z" :class="hovered === 'outer' ? 'fill-[#214F83]' : 'fill-transparent'" stroke="rgba(0,0,0,0.35)" stroke-width="2" />
        </g>
        <!-- outer 下半 -->
        <g @pointerenter="setHover('outer')" @pointerleave="setHover(null)">
          <path d="M937.4 373.06L923.37 376.25L923.4 376.06L895.29 382.43L800.22 518.95L759.45 576.99L759.36 576.85L738.41 601.14L711.41 617.14L683.41 618.14L678.51 618.49L653.91 617.55L626.91 601.55L605.41 578.05L588.89 553.1L480.41 389.05L430.35 374.17C424.3 413.3 439.13 465.58 439.13 465.58C463.85 541.11 493.38 568.5 493.38 568.5L500.71 576.76L500.41 577.05C520.01 598.82 540.8 616.42 566.41 631.05L568.32 632.32C590.94 646.86 616.65 654.42 637.89 658.35L646.41 637.05L683.41 637.58L716.41 638.05L724.57 658.46C746.32 654.7 773.34 647.12 796.99 631.92L797.41 632.05C823.02 617.42 846.81 598.83 866.41 577.05L866.54 576.82L873.93 568.5C873.93 568.5 903.46 541.11 928.18 465.58C928.18 465.58 941.41 423.05 937.41 373.05L937.4 373.06Z" :class="hovered === 'outer' ? 'fill-[#214F83]' : 'fill-transparent'" stroke="rgba(0,0,0,0.35)" stroke-width="2" />
        </g>
        <!-- left -->
        <g @pointerenter="setHover('left')" @pointerleave="setHover(null)">
          <path d="M641.65 430.93C641.65 430.93 607.65 447.93 595.65 479.93L471.03 367.57L494.38 352.1C494.38 352.1 493.65 272.93 591.65 224.93L641.65 430.93Z" :class="hovered === 'left' ? 'fill-[#C62827]' : 'fill-transparent'" stroke="rgba(0,0,0,0.35)" stroke-width="2" />
        </g>
        <!-- center -->
        <g @pointerenter="setHover('center')" @pointerleave="setHover(null)">
          <path d="M641.48 430.43C641.48 430.43 686.8 407.25 727.72 430.59L777.72 224.59C777.72 224.59 689.64 180.93 591.64 224.93L641.47 430.43H641.48Z" :class="hovered === 'center' ? 'fill-[#C62827]' : 'fill-transparent'" stroke="rgba(0,0,0,0.35)" stroke-width="2" />
        </g>
        <!-- right -->
        <g @pointerenter="setHover('right')" @pointerleave="setHover(null)">
          <path d="M727.72 430.59C727.72 430.59 761.72 447.59 773.72 479.59L898.34 367.23L874.99 351.76C874.99 351.76 875.72 272.59 777.72 224.59L727.72 430.59Z" :class="hovered === 'right' ? 'fill-[#C62827]' : 'fill-transparent'" stroke="rgba(0,0,0,0.35)" stroke-width="2" />
        </g>
      </svg>
      <!-- Labels -->
      <!-- 左外野 label -->
      <div class="w-[30%] absolute z-20  select-none" :style="pos.left" @pointerenter="setHover('left')" @pointerleave="setHover(null)">
        <div class="transition-[filter,transform] duration-150" :style="labelVars('left')" v-html="labelLeftHtml" />
      </div>
      <!-- 中外野 label -->
      <div class="w-[30%] absolute z-20  select-none" :style="pos.center" @pointerenter="setHover('center')" @pointerleave="setHover(null)">
        <div class="transition-[filter,transform] duration-150" :style="labelVars('center')" v-html="labelCenterHtml" />
      </div>
      <!-- 右外野 label -->
      <div class="w-[30%] absolute z-20  select-none" :style="pos.right" @pointerenter="setHover('right')" @pointerleave="setHover(null)">
        <div class="transition-[filter,transform] duration-150" :style="labelVars('right')" v-html="labelRightHtml" />
      </div>
      <!-- 外圍/觀眾席 label -->
      <div class="w-[30%] absolute z-20  select-none" :style="pos.outer" @pointerenter="setHover('outer')" @pointerleave="setHover(null)">
        <div class="transition-[filter,transform] duration-150" :style="labelVars('outer')" v-html="labelOuterHtml" />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref } from 'vue'
  import outerSvgRaw from '@/assets/img/field-labels/outer.svg?raw'
  import leftSvgRaw from '@/assets/img/field-labels/left.svg?raw'
  import centerSvgRaw from '@/assets/img/field-labels/center.svg?raw'
  import rightSvgRaw from '@/assets/img/field-labels/right.svg?raw'

  const hovered = ref(null)
  const setHover = (k) => (hovered.value = k)

  // 顏色
  const colors = {
    outer: '#214F83',
    left: '#C62827',
    center: '#C62827',
    right: '#C62827',
  }

  // label 未 hover 時的顏色
  const baseLabelColor = '#D9D9D9'

  // 位置
  const pos = {
    left: { left: '40%', top: '50%', transform: 'translate(-100%, -100%)' },
    center: { left: '52%', top: '30%',  transform: 'translate(0, -100%)'},
    right: { left: '60%', top: '50%',  transform: 'translate(0, -100%)'},
    outer: { left: '35%', top: '60%',  transform: 'translate(-100%, 0%)'},
  }

  // 這個會把 fill="black" 變成 fill="currentColor"
  // 讓外層 div 的 color 控制黑底顏色；白字 (fill="white") 保留
  function normalizeLabelSvg(svgString) {
    if (!svgString) return ''
    return svgString
      // 背景（原本 black）=> 用 --label-bg 控制
      .replaceAll(/fill="black"/gi, 'fill="var(--label-bg)"')
      .replaceAll(/fill="#000000"/gi, 'fill="var(--label-bg)"')
      .replaceAll(/fill="#000"/gi, 'fill="var(--label-bg)"')
      .replaceAll(/fill="rgb\(0,\s*0,\s*0\)"/gi, 'fill="var(--label-bg)"')

      // 文字（原本 white）=> 用 --label-text 控制
      .replaceAll(/fill="white"/gi, 'fill="var(--label-text)"')
      .replaceAll(/fill="#ffffff"/gi, 'fill="var(--label-text)"')
      .replaceAll(/fill="#fff"/gi, 'fill="var(--label-text)"')
      .replaceAll(/fill="rgb\(255,\s*255,\s*255\)"/gi, 'fill="var(--label-text)"')
  }
  const labelVars = (key) => {
    const isHover = hovered.value === key
    return {
      // 預設：灰底黑字；hover：黑底白字
      '--label-bg': isHover ? '#000000' : '#D9D9D9',
      '--label-text': isHover ? '#FFFFFF' : '#000000',
    }
  }

  const labelOuterHtml = computed(() => normalizeLabelSvg(outerSvgRaw))
  const labelLeftHtml = computed(() => normalizeLabelSvg(leftSvgRaw))
  const labelCenterHtml = computed(() => normalizeLabelSvg(centerSvgRaw))
  const labelRightHtml = computed(() => normalizeLabelSvg(rightSvgRaw))
</script>