import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: routes.pages.main, component: () => import('./client/pages/Homepage.vue') },
      { path: routes.pages.about, component: () => import('./client/pages/About.vue') },
      { path: routes.pages.issue, component: () => import('./client/pages/Issue.vue') },
      { path: '/', redirect: '/en/' }
    ],
  });
}
