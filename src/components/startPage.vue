<script>

export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods: {

  },
  components: {
  }
}
</script>

<template>
<body>
  <div class="left">
    <span>키오스크 이용안내</span>
    <div class="info1">
      <button class="st-bt u-bt">
        <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <br><br>
      메뉴를 선택해주세요
    </div>

    <div class="info2">
      <button class="st-bt u-bt">
        <img alt="menu" src="./pic/icon2.png" width="80" height="80"/>
      </button>
      <br><br>
      장바구니에서 메뉴<br>확인 후 결제해 주세요
    </div>

    <div class="info3">
      <button class="st-bt u-bt">
        <img alt="menu" src="./pic/icon3.png" width="70" height="75" />
      </button>
      <br><br>
      카드 투입구에 카드를<br>넣어 결제해 주세요
    </div>

    <div class="info4">
      <button class="st-bt u-bt">
        <img alt="menu" src="./pic/icon4.png" width="70" height="75" />
      </button>
      <br><br>
      영수증에 적힌<br>주문번호를 <br>확인해 주세요
    </div>

    <div class="info5">
      <button class="st-bt u-bt">
        <img alt="menu" src="./pic/icon5.png" width="80" height="80" />
    </button>
    <br><br>
    카운터에서 제품을<br>수령해 주세요
    </div>
    <div class="right">
      <div class="hp1">
        <button class="help-bt c-bt">
          화면 확대
        </button>
      </div>
      <div class="hp2">
        <button class="help-bt c-bt">
          직원 호출
        </button>
      </div>
      <div class="hp3">
        <button class="help-bt c-bt">
          장애인
        </button>
      </div>
    </div>
  </div>


</body>
</template>




<style scoped>


div.left {
  width: 62%;
  height: 75%;
  float: left;
  box-sizing: border-box;
  background: #ffffff;
}
div.right {
  width: 13%;
  height: 75%;
  float: left;
  box-sizing: border-box;
  background: #eeeeee;
}

.info1, .info2, .info3, .info4, .info5 {
  float: left;
  margin-top: 25%;
  margin-left: 2%;
}
.hp1 {
  margin-top: 140%;
}
.hp2, .hp3 {
  margin-top: 15%;
}

/*테이블*/
.tb-info{
  margin-left:auto;
  margin-right:auto;
  margin-top: 25%;
}
.tb-bt{
  margin-left:auto;
  margin-right:auto;
  margin-top: 140%;
}
td {
  padding: 15px 24px;
  text-align: center;
  font-size: 12pt;
}

/*버튼*/
.st-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 100px;
  height: 100px;
  margin: 0px;
  background-color: #ffffff;
}
.u-bt {
  border: 2px solid darkgray;
}
.help-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 50%;
  transition: 0.25s;
  width: 100px;
  height: 100px;
  margin: 0px;
  background-color: #ffffff;
}
.help-bt:hover{
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}
.c-bt {
  border: 2px solid #a3a1a1;
  color: #000000;
  font-size: 13pt;
  top: -85px;
}
</style>
