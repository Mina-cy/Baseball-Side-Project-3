<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { 
    type: String, 
    required: true,
    validator: (value) => ['news', 'activity'].includes(value)
  },
  year: { 
    type: String, 
    default: '2026' 
  },
  date: { 
    type: String, 
    default: '01.13' 
  },
  content: { 
    type: String, 
    default: '' 
  }
})
const cardStyle = computed(() => {
  return props.type === 'news' 
    ? { 
        bg: 'bg-[#EAD7B6]',        
        text: 'text-black',         
        label: '活動消息'           
      } 
      : {
        bg: 'bg-[#7B4E2F]',        
        text: 'text-white',         
        label: '資訊異動'            
      }
    
})
</script>

<template>
  <div
    class="h-[80px] w-auto cursor-pointer shadow-[3px_3px_5px_rgba(0,0,0,0.4)] hover:scale-98 active:scale-95 sm:h-[100px]"
  >
    <div class="flex h-full items-center">
      <div
        class="ml-3 flex h-[50px] w-[90px] shrink-0 md:w-[150px] items-center justify-center  text-[14px] sm:h-[75px] sm:text-[18px] md:text-xl lg:mr-6 lg:text-2xl xl:text-2xl"
         :class="[cardStyle.bg, cardStyle.text]"
      >
        {{ cardStyle.label }}
      </div>
      <div
        class="mr-3 w-[90px] border-r-2 border-gray-700 px-4 md:w-[120px] lg:mr-6 lg:w-[140px] shrink-0"
      >
        <p class="text-[10px] md:text-[16px]">{{ year }}</p>
        <p class="text-xl font-bold md:text-3xl lg:text-3xl xl:text-4xl">
          {{ date }}
        </p>
      </div>

      <p class="truncate md:text-xl lg:text-2xl xl:text-2xl">
        <slot>{{ content }}</slot>
      </p>
    </div>
  </div>
</template>
