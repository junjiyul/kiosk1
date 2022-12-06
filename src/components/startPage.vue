<script>


export default {
  name: 'stratPage',
  data(){

    return{

    }
  },
  methods: {
    goTo:function (v){
      this.$router.push(v);
    },


  },
  components: {

  }
}
</script>

<template >
<div class="main-info" @click="goTo('/coFfee1')">
  <span>내린커피 키오스크 이용안내</span>
  <p style="z-index: 5">아무곳이나 클릭해주세요!</p>
  <button @click="goTo('/finishCash')">결제종료</button>
<div class="info">
  <div class="info-sub">
  <img src="./pic/icon1.png" alt=""><span>1. 메뉴를 선택하세요 !</span>
  </div>
</div>

  <div class="info">
    <div class="info-sub">
    <img src="./pic/icon2.png" alt=""><span>2. 장바구니에서 메뉴확인 후 결제해주세요~</span>
    </div>
  </div>

  <div class="info">
    <div class="info-sub">
    <img src="./pic/icon3.png" alt=""><span>3. 카드 투입구에 카드를 넣어 결제해주세요~</span>
    </div>
  </div>

  <div class="info">
    <div class="info-sub">
    <img src="./pic/icon4.png" alt=""><span>4. 영수증에 적힌 주문번호를 확인해주세요~</span>
    </div>
  </div>

  <div class="info">
    <div class="info-sub">
    <img src="./pic/icon5.png" alt=""><span>5. 카운터에서 제품을 수령해주세요!</span>
    </div>
  </div>
</div>
  <div class="side">

</div>
</template>




