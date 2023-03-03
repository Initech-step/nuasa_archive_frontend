import { createRouter, createWebHistory } from 'vue-router'
import HomeYearView from '../views/HomeView.vue'
import  CoursesView from '../views/Courses.vue'
import  MaterialsView from '../views/Materials.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeYearView
    },
    {
      path: '/courses/:year_id/',
      name: 'courses',
      component: CoursesView
    },
    {
      path: '/resources/:course_id/',
      name: 'resources',
      component: MaterialsView
    }
  ]
})

export default router
