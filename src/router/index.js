import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/coop',
      name: 'coop',
      component: () => import('@/views/CoopView.vue')
    },
    {
      path: '/area-rental',
      name: 'area-rental',
      component: () => import('@/views/AreaRentalView.vue')
    },
    {
      path: '/banner-rental',
      name: 'banner-rental',
      component: () => import('@/views/BannerRentalView.vue')
    },
    {
      path: '/area-rental-inner/:id',
      name: 'area-rental-inner',
      component: () => import('@/views/AreaRentalInnerView.vue')
    },
    {
      path: '/banner-rental-inner/:id',
      name: 'banner-rental-inner',
      component: () => import('@/views/BannerRentalInnerView.vue')
    },
    {
      path: '/parking-lots',
      name: 'parking-lots',
      component: () => import('@/views/ParkingLotsView.vue')
    },
    {
      path: '/about-field',
      name: 'about-field',
      component: () => import('@/views/AboutFieldView.vue')
    },
    {
      path: '/about-multi-function',
      name: 'about-multi-function',
      component: () => import('@/views/AboutMultiFunctionView.vue')
    },
    {
      path: '/traffic-info',
      name: 'traffic-info',
      component: () => import('@/views/TrafficInfoView.vue')
    },
    {
      path: '/field-area',
      name: 'field-area',
      component: () => import('@/views/FieldAreaView.vue')
    },
    {
      path: '/field-bleacher',
      name: 'field-bleacher',
      component: () => import('@/views/FieldBleacherView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, left: 0 }
    // 想要滑順可以用return { top: 0, left: 0, behavior: 'smooth' }
  }
})

export default router
