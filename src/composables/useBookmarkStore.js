import { reactive, computed, watch } from 'vue'

const KEY = 'rental:bookmarks'

const state = reactive({
  // 儲存：{ area: Set(), ad: Set() }
  area: new Set(), // 區域場地
  ad: new Set()
})

// 初始化：從 localStorage 讀回來
const saved = localStorage.getItem(KEY)
if (saved) {
  try {
    const obj = JSON.parse(saved)
    // 轉換回 Set
    state.area = new Set(obj.area || [])
    state.ad = new Set(obj.ad || [])
  } catch {}
}

// 持久化：每次變動就寫回 localStorage
watch(
  () => ({
    area: Array.from(state.area), 
    ad: Array.from(state.ad)
  }),
  (obj) => {
     localStorage.setItem(KEY, JSON.stringify(obj))
  },
  
  { deep: true }
)


// 切換收藏
function toggle(id, type = 'area') {
  console.log('🔄 toggle 被呼叫:', id, type) 
  console.log('state 目前:', {
    area: Array.from(state.area),
    ad: Array.from(state.ad)
  })
  if (!id) return
  if (state[type].has(id)) {
    state[type].delete(id)
  } else {
    state[type].add(id)
  }
}

// 檢查是否收藏
function isSaved(id, type = 'area') {
  return state[type]?.has(id) || false
}

// 取得某類型的收藏列表
function getList(type = 'area') {
  return Array.from(state[type] || [])
}

// 取得所有收藏
const allLists = computed(() => ({
  area: Array.from(state.area),
  ad: Array.from(state.ad)      
}))

export function useBookmarkStore() {
  return {
    state,
    toggle,
    isSaved,
    getList,
    allLists
  }
}