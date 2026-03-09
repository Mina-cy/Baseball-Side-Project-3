<script setup>
defineProps({
  label: String, // 顯示標籤，例如："申請人姓名"
  required: Boolean, // 是否必填（顯示紅星號）
  error: String, // 錯誤訊息
  type: {
    type: String,
    default: 'text'
  }, // 輸入類型：text、email、tel、number、date
  modelValue: [String, Number], // v-model 綁定的值
  placeholder: String, // 提示文字
  maxlength: Number // 最大長度
})
const emit = defineEmits(['update:modelValue'])

// 處理不同類型的輸入格式化
const handleInput = (e) => {
  let val = e.target.value
  
  // 電話號碼：只留數字，限制10碼
  if (props.type === 'tel') {
    val = val.replace(/\D/g, '') // 只留數字
    if (val.length > 10) val = val.slice(0, 10)
  }
    // 數字：只留數字
  if (props.type === 'number') {
    val = val.replace(/\D/g, '')
  }
  
  emit('update:modelValue', val)
}
</script>

<template>
  <div class="flex w-full flex-col">
    <!-- 標籤 -->
    <label 
      :for="name" 
      class="border-l-2 border-black pl-3 text-[18px] sm:text-[22px]"
    >
      {{ label }}
      <span v-if="required" class="text-[#C62828]">*</span>
    </label>
    
    <!-- 輸入框 -->
    <input
      :id="name"
      :type="type === 'tel' ? 'tel' : type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="handleInput"
      class="mt-3 w-full rounded border border-gray-300 px-2 py-1 text-[16px] outline-none transition-all focus:border-[#0D2953] focus:ring-1 focus:ring-[#0D2953] md:text-[22px]"
      :class="{ 'border-red-500': error }"
    />
    
    <!-- 錯誤訊息 -->
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>