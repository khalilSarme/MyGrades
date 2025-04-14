import {
  createRouter,
  createWebHistory
} from 'vue-router'

import StartView from '../views/StartView.vue'

const routes = [{
  path: '/',
  name: 'myStart',
  component: StartView,
  meta: {
    title: "Get Started",
    description: "Vuetivo is an Exam Grades Management System, you can add , remove and update your grades by simple steps. Click the button below to start an app by adding a new grade.",
    text: "Home",
  }
},
  {
    path: '/configure_data',
    name: 'myConfig',
    component: () => import('../views/FormView.vue'),
    meta: {
      title: 'Grade Configuration',
      description: "Don't forget any field with (no value). Please, fill out all existing fields. Final (Practical + Theoretical) grade must be between 0 and 100.",
      text: "New Grade"
    }
  },
  {
    path: '/my_grades',
    name: 'myGrades',
    component: () => import("../views/GradesView.vue"),
    meta: {
      title: "Grades Preview",
      description: "All your grades will be shown here. This system can be hold your grades in (local Storage).",
      text: "My Grades"
    }
  },
];

const router = createRouter({
  history: createWebHistory()/*(import.meta.env.BASE_URL)*/,
  routes,
})

export default router
