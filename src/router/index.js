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
    path: '/basket',
    name: 'baSket',
    component:() => import('../components/basket.vue')
  },
  {
    path: '/startExPage',
    name: 'startExPage',
    component:() => import('../components/startExPage.vue')
  },
  {
    path: '/teaframe1',
    name: 'teaFrame1',
    component:() => import('../components/teaframe1.vue')
  },
  {
    path: '/teaframe2',
    name: 'teaFrame2',
    component:() => import('../components/teaframe2.vue')
  },
  {
    path: '/adeframe',
    name: 'adeFreame',
    component:() => import('../components/adeframe.vue')
  },
  {
    path: '/cardPage',
    name: 'cardPage',
    component:() => import('../components/cardPage.vue')
  },
  {
    path: '/choosePage',
    name: 'choosePage',
    component:() => import('../components/choosePage.vue')
  },
  {
    path: '/coFfee1',
    name: 'coFfee1',
    component:() => import('../components/coFfee1.vue')
  },
  {
    path: '/coFfee2',
    name: 'coFfee2',
    component:() => import('../components/coFfee2.vue')
  },
  {
    path: '/dessertFrame',
    name: 'dessertFrame',
    component:() => import('../components/dessertFrame.vue')
  },
  {
    path: '/drinkFrame1',
    name: 'drinkFrame1',
    component:() => import('../components/drinkFrame1.vue')
  },
  {
    path: '/drinkFrame2',
    name: 'drinkFrame2',
    component:() => import('../components/drinkFrame2.vue')
  },
  {
    path: '/EXcardPage',
    name: 'EXcardPage',
    component:() => import('../components/EXcardPage.vue')
  },
  {
    path: '/EXchoosePage',
    name: 'EXchoosePage',
    component:() => import('../components/EXchoosePage.vue')
  },
  {
    path: '/EXpayPage',
    name: 'EXpayPage',
    component:() => import('../components/EXpayPage.vue')
  },
  {
    path: '/finIsh',
    name: 'finIsh',
    component:() => import('../components/finIsh.vue')
  },
  {
    path: '/finishCash',
    name: 'finishCash',
    component:() => import('../components/finishCash.vue')
  },
  {
    path: '/menuPage',
    name: 'menuPage',
    component:() => import('../components/menuPage.vue')
  },
  {
    path: '/payPage',
    name: 'payPage',
    component:() => import('../components/payPage.vue')
  },
  {
    path: '/PlusadeFrame',
    name: 'PlusadeFrame',
    component:() => import('../components/PlusadeFrame.vue')
  },
  {
    path: '/Pluscoffee1',
    name: 'PluscoFfee1',
    component:() => import('../components/Pluscoffee1.vue')
  },
  {
    path: '/Pluscoffee2',
    name: 'PluscoFfee2',
    component:() => import('../components/Pluscoffee2.vue')
  },
  {
    path: '/Plusdrinkframe2',
    name: 'PlusdrinkFrame2',
    component:() => import('../components/Plusdrinkframe2.vue')
  },
  {
    path: '/PlusdrinkFrame1',
    name: 'PlusdrinkFrame1',
    component:() => import('../components/PlusdrinkFrame1.vue')
  },
  {
    path: '/PlusdessertFrame',
    name: 'PlusdessertFrame',
    component:() => import('../components/PlusdessertFrame.vue')
  },
  {
    path: '/PlusmenuPage',
    name: 'PlusmenuPage',
    component:() => import('../components/PlusmenuPage.vue')
  },
  {
    path: '/PlusteaFrame1',
    name: 'PlusteaFrame1',
    component:() => import('../components/PlusteaFrame1.vue')
  },
  {
    path: '/PlusteaFrame2',
    name: 'PlusteaFrame2',
    component:() => import('../components/PlusteaFrame2.vue')
  },
  {
    path: '/startExPage',
    name: 'startExPage',
    component:() => import('../components/startExPage.vue')
  },
  {
    path: '/tWo',
    name: 'tWo',
    component:() => import('../components/tWo.vue')
  },
  {
    path: '/tWo2',
    name: 'tWo2',
    component:() => import('../components/tWo2.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
