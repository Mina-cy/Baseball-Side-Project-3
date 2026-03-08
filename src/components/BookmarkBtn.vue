<script setup>
import { computed } from "vue"
import Swal from "sweetalert2"
import { useBookmarkStore } from "@/composables/useBookmarkStore.js"

const props = defineProps({
  id: { type: String, required: true },
})

const { toggle, isSaved } = useBookmarkStore()

const isBookmarked = computed(() => isSaved(props.id))

const handleBookmark = (e) => {
  // 如果 BookmarkBtn 在 RouterLink 裡，避免點了直接跳頁
  e?.stopPropagation?.()
  e?.preventDefault?.()

  const willSave = !isBookmarked.value
  toggle(props.id)

  if (willSave) {
    Swal.fire({
      title: "已加入合作提案",
      text: "您可以在上方【合作提案】中查看已收藏的內容",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
    })
  }
}
</script>

<template>
  <div
    @click="handleBookmark"
    class="relative w-4 md:w-7 h-6 md:h-9 bg-black bookmark-clip cursor-pointer transition-all active:scale-95"
    :class="{ 'bg-[#C62828]': isBookmarked }"
  >
    <div
      class="absolute top-[1px] left-[1px] w-[14px] md:w-[26px] h-[22px] md:h-[34px] bookmark-clip transition-colors flex justify-center pt-1"
      :class="isBookmarked ? 'bg-[#C62828]' : 'bg-white hover:bg-gray-100'"
    />
  </div>
</template>

<style scoped>
.bookmark-clip {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
}
</style>
