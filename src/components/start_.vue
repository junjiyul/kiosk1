<template>
<body>    
  <!--
  <div class="left">
        
    
    <table class="tb-info">
      <tr>
        <td>
          <button class="st-bt u-bt">
              <img alt="menu" src="./pic/icon1.png" width="90" height="95"/>
          </button>
        </td>
        <td>
          <button class="st-bt u-bt">
              <img alt="menu" src="./pic/icon2.png" width="100" height="100"/>
          </button>
        </td>
        <td>
          <button class="st-bt u-bt">
            <img alt="menu" src="./pic/icon3.png" width="90" height="95"/>
        </button>
        </td>
        <td>
          <button class="st-bt u-bt">
            <img alt="menu" src="./pic/icon4.png" width="90" height="95"/>
        </button>
        </td>
        <td>
          <button class="st-bt u-bt">
            <img alt="menu" src="./pic/icon5.png" width="100" height="100"/>
        </button>
        </td>
      </tr>
      <tr>
        <td>
          메뉴를 선택해주세요
        </td>
        <td>
          장바구니에서 메뉴<br>확인 후 결제해 주세요
        </td>
        <td>
          카드 투입구에 카드를<br>넣어 결제해 주세요
        </td>
        <td>
          영수증에 적힌<br>주문번호를 확인해<br>주세요
        </td>
        <td>
          카운터에서 제품을<br>수령해 주세요
        </td>
      </tr>
    </table>
  </div>
  <div class="right">
    <table class="tb-bt">
      <tr>
        <td>
          <button class="help-bt c-bt">
            화면 확대
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button class="help-bt c-bt">
            직원 호출
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button class="help-bt c-bt">
            장애인
          </button>
        </td>
      </tr>
    </table>
  </div>-->

  <div class="left">
    <h1>키오스크 이용안내</h1>
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
</body>  
</template>
 
<script>

  export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods: {
  pagelink: function() {
    this.$router.push("/choose_01");
    }
  },
  components: {
  }
}
</script>

<style>
body{
  width: 1024px;
  height: 768px;
  margin: 0px;
  margin-top: 0%;
}

div.left {
  width: 62%;
  height: 75%;
  float: left;
  box-sizing: border-box;
  background: lightgoldenrodyellow;
}
div.right {
  width: 13%;
  height: 75%;
  float: left;
  box-sizing: border-box;
  background: #eeeeee;
}
h1{
  margin-top: 15%;
  font-size: 30pt;
}
.info1, .info2, .info3, .info4, .info5 {
  float: left;
  margin-top: 25%;
  margin-left: 2%;
}
.hp1, .hp2, .hp3 {
  
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
}
</style>