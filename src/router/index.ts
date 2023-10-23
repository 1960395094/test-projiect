import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    children: [
      { name: 'dataSet', path: '', component: () => import('../views/dataSet/index.vue') },
      { name: 'importData', path: '/importData', component: () => import('../views/importData/index.vue') }
    ]
  },
  {
    path: '/allKnowledgeLibrary',
    name: 'allKnowledgeLibrary',
    component: () => import('../views/allKnowledgeLibrary/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
