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
// 修正：從免費套件引入特定圖示，避免 KIT_CODE 錯誤
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// swiper
import 'swiper/css'
import 'swiper/css/pagination'
/* 加入圖庫 */
library.add(faMagnifyingGlass, faXmark, faBars)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(createPinia()) // 現在這裡不會報錯了
app.use(router)

app.mount('#app')
