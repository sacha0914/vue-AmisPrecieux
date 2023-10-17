import { createRouter, createWebHistory } from 'vue-router'
import SinglePage from "@/components/SinglePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SinglePage
    }
  ]
})


export default router
