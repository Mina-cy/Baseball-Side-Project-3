import { reactive, computed, watch } from "vue"

const KEY = "rental:bookmarks"

const state = reactive({
  // 用 Set 存 id：快速判斷有沒有收藏
  ids: new Set(),
})

// 初始化：從 localStorage 讀回來
const saved = localStorage.getItem(KEY)
if (saved) {
  try {
    const arr = JSON.parse(saved)
    if (Array.isArray(arr)) state.ids = new Set(arr)
  } catch {}
}

// 持久化：每次變動就寫回 localStorage
watch(
  () => Array.from(state.ids),
  (arr) => localStorage.setItem(KEY, JSON.stringify(arr)), { deep: true }
)

function toggle(id) {
  if (!id) return
  if (state.ids.has(id)) state.ids.delete(id)
  else state.ids.add(id)
}

function isSaved(id) {
  return state.ids.has(id)
}

const list = computed(() => Array.from(state.ids))

export function useBookmarkStore() {
  return { state, toggle, isSaved, list }
}