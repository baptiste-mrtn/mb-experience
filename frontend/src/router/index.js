import { createRouter, createWebHistory } from 'vue-router'

import Intro from '@/scenes/Intro.vue'
import Identity from '@/scenes/Identity.vue'
import Pricing from '@/scenes/Pricing.vue'
import Projects from '@/scenes/Projects.vue'
import Contact from '@/scenes/Contact.vue'

const routes = [
  { path: '/', component: Intro },
  { path: '/identity', component: Identity },
  { path: '/projects', component: Projects },
  { path: '/pricing', component: Pricing },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
