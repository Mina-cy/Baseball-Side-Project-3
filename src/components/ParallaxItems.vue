<template>
  <img
    ref="rellaxEl"
    class="rellax w-full"
    :data-rellax-speed="speed"
    :src="src"
    :alt="alt"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Rellax from 'rellax'

// ✅ 接收上層 props
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  speed: {
    type: [Number, String],
    default: 0
  },
  alt: {
    type: String,
    default: ''
  }
})

const rellaxEl = ref(null)
let rellaxInstance = null

onMounted(() => {
  // 👉 指定單一元素（比用 .rellax selector 更安全）
  rellaxInstance = new Rellax(rellaxEl.value)
})

onBeforeUnmount(() => {
  rellaxInstance?.destroy()
  rellaxInstance = null
})
</script>
