import '@/assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

/* Font Awesome 設定 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faXmark,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

// swiper
import 'swiper/css'
import 'swiper/css/pagination'

/* 加入圖庫 */
library.add(faMagnifyingGlass, faXmark, faBars)

// ✅ 修正：使用正確的套件名稱
import DevUI from 'vue-devui'
import 'vue-devui/style.css' // 注意：樣式路徑也不同！

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(DevUI)
app.mount('#app')
