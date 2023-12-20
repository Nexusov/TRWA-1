import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const Index = defineAsyncComponent(() => import('../pages/Index/Index.vue'));
const Add = defineAsyncComponent(() => import('../pages/Add/Add.vue'));
const About = defineAsyncComponent(() => import('../pages/About/About.vue'));
const NotFoundPage = defineAsyncComponent(() => import('../pages/404/404.vue'));

const routes = [
  { path: '/', component: Index },
  { path: '/add', component: Add },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
