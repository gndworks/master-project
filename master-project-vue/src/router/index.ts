import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/project1',
      name: 'Project1',
      component: () => import('../components/project1/Project1.vue')
    }
  ],
})

export default router
