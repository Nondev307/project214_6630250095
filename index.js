import { createRouter, createWebHistory } from 'vue-router'; // ต้องใช้ createRouter แทน VueRouter

import StdInfo from '@/components/StdInfo.vue';
import StdEdit from '@/components/StdEdit.vue';
import CourseInfo from '@/components/CourseInfo.vue';

const routes = [
  {
    path: '/',
    name: 'StdInfo',
    component: StdInfo,
  },
  {
    path: '/edit',
    name: 'StdEdit',
    component: StdEdit,
  },
  {
    path: '/course',
    name: 'CourseInfo',
    component: CourseInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});

export default router;
