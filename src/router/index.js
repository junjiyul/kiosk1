// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8080/main

// [라우터 import 수행 실시]
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/startPage.vue'),
  },
  {
    path: '/startExPage',
    name: 'startExPage',
    component:() => import('../components/startExPage.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
