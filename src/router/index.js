import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoveView from '../views/LoveView.vue'
import StudyView from '../views/StudyView.vue'
import WorkView from '../views/WorkView.vue'
import HealthView from '../views/HealthView.vue'
import FeedbackView from '@/views/FeedbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/love',
      name: 'love',
      component: LoveView
    },
    {
      path: '/study',
      name: 'study',
      component: StudyView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/health',
      name: 'health',
      component: HealthView
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    }
  ]
})

export default router 