import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/commons/home';
import Login from '@/components/pages/loginPage';
import WorldPage from '@/components/pages/worldPage';
import ChinaPage from '@/components/pages/chinaPage';
import PreventPage from '@/components/pages/preventPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/world',
        component: WorldPage,
        meta: {
          title: '世界病情',
        },
      },
      {
        path: '/china',
        component: ChinaPage,
        meta: {
          title: '中国病情',
        },
      },
      {
        path: '/prevent',
        component: PreventPage,
        meta: {
          title: '预防措施',
        },
      },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/*',
      redirect: '/world',
    },
  ],
});
