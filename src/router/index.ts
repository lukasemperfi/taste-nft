import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue'),
  },
  {
    path: '/artwork/:id',
    name: 'artwork',
    component: () => import('@/pages/artwork/Artwork.vue'),
  },

  {
    path: '/creator-profile/:id',
    name: 'creator-profile',
    component: () => import('@/pages/creator-profile/CreatorProfile.vue'),
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: () => import('@/pages/profile/Profile.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/not-found/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
