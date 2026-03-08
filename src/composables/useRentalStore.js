import { reactive, computed, watch } from 'vue'
import rentalData from '/public/rental-data.json'

const state = reactive({
  data: rentalData,

  // 正式套用（按搜尋才會改）
  guests: '',
  hashtag: '',

  // 輸入中（打字只改這個）
  draftGuests: '',
  draftHashtag: '',
})

const KEY = 'rental:filters'

function splitTags(tagText) {
  return String(tagText || '')
    .split(/[、,，#\s]+/g)
    .map(s => s.trim())
    .filter(Boolean)
}

// 只看「正式」guests/hashtag
const filteredList = computed(() => {
  const entries = Object.entries(state.data || {})

  const gRaw = String(state.guests ?? '').trim()
  const g = gRaw === '' ? null : Number(gRaw)
  const q = String(state.hashtag ?? '').trim().toLowerCase()

  return entries.filter(([id, item]) => {
    const cap = Number(item?.max_capacity ?? 0)
    const okGuests = g === null ? true : (Number.isFinite(cap) && cap >= g)

    const tags = splitTags(item?.tag).map(t => t.toLowerCase())
    const okTag = q ? tags.some(t => t.includes(q)) : true

    return okGuests && okTag
  })
})

// 初始化：同時塞入正式 + draft（讓輸入框顯示上次條件）
const saved = localStorage.getItem(KEY)
if (saved) {
  try {
    const obj = JSON.parse(saved)
    state.guests = String(obj?.guests ?? '')
    state.hashtag = String(obj?.hashtag ?? '')
    state.draftGuests = state.guests
    state.draftHashtag = state.hashtag
  } catch {}
}

// 只保存「正式」條件（按搜尋後才保存）
watch(
  () => ({ guests: state.guests, hashtag: state.hashtag }),
  (val) => localStorage.setItem(KEY, JSON.stringify(val)),
  { deep: true }
)

// 按搜尋時：把 draft 套用到正式 filters
function selectFilters() {
  state.guests = String(state.draftGuests ?? '')
  state.hashtag = String(state.draftHashtag ?? '')
}

export function useRentalStore() {
  return { state, filteredList, selectFilters }
}
