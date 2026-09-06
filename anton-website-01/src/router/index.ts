import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Anton Kolesnikov | Software Developer',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About | Anton Kolesnikov',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projects | Anton Kolesnikov',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact | Anton Kolesnikov',
      },
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

router.afterEach((to) => {
  document.title =
    typeof to.meta.title === 'string'
      ? to.meta.title
      : 'Anton Kolesnikov'
})

export default router