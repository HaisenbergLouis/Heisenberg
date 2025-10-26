import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/Layout.vue'
import Home from '@/views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        // 可以在这里添加更多子路由
        // {
        //   path: 'about',
        //   name: 'about',
        //   component: () => import('@/views/About/About.vue'),
        // },
      ],
    },
  ],
})

export default router
