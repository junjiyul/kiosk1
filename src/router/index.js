// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8080/main

// [라우터 import 수행 실시]
import { createWebHistory, createRouter } from 'vue-router';

// [라우터 path 접속 경로 설정]
const routes = [
  {
    path: "/choosePage", // [경로]
    name: "choosePage", // [이름]
    component: () => import('../components/choosePage') // [로드 파일]
  },
  {
    path: "/menuPage", // [경로]
    name: "menuPage", // [이름]
    component: () => import('../components/menuPage') // [로드 파일]
  }
];

// [라우터 설정 실시]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// <div class="basket">
//   <div class="basket-fir"></div>
//   <div class="basket-aop">
//     <div>총 결제 금액</div>
//     <p>0</p>
//   </div>
//   <div class="basket-cart">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/>
//     </svg><div class="cart-basket">장바구니</div></div>
//   <div class="basket-pay"></div>
// </div>
// </body>