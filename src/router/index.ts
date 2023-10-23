import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/dateSet'},
  { path: '/dateSet', component: () => import('../views/dataSet/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
