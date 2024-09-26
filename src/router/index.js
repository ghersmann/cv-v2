import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import PostersGwfView from '@/views/PostersGwfView.vue'
import RedLeafCameras from '@/views/RedLeafCameras.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotographyView
    },
    {
      path: '/posters-gwf',
      name: 'postersgwf',
      component: PostersGwfView
    },
    {
      path: '/red-leaf-cameras',
      name: 'redleafcameras',
      component: RedLeafCameras
    }
  ]
})

export default router
