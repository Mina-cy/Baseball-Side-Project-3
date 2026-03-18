import '@/assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
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

// timeline套件
import DevUI from 'vue-devui'
import 'vue-devui/style.css' 

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(DevUI)
app.mount('#app')
