import { createRouter, createWebHistory } from 'vue-router';
import QuizesView from '../views/QuizesView.vue';
import QuizView from '../views/QuizView.vue';
import NotFound from '../views/404View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Quizes',
      component: QuizesView,
    },
    {
      path: '/quizes',
      redirect: '/',
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFound,
    },
  ],
});

export default router;
