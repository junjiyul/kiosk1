<template>
  <body>
    <div>
      <div class="choose1">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon1.png" />
        </button>
        <br><br>1. 메뉴를<br>선택해 주세요
          <img class="arrow"  src="" />
      </div>
      <div class="choose2">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon2.png" />
        </button>
        <br><br>2. 장바구니에서<br>메뉴 확인 후<br>결제해 주세요>
      </div>
      <div class="choose3">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon3.png" />
        </button>
        <br><br>3. 카드 투입구에<br>카드를 넣어<br>결제해 주세요
      </div>
      <div class="choose4">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon4.png" />
        </button>
        <br><br>4. 영수증에 찍힌<br>주문번호를<br>확인해 주세요

      </div>
      <div class="choose5">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon5.png" />
        </button>
        <br><br>5. 카운터에서 제품을<br>수령해 주세요

      </div>
    </div>

  </body>
</template>

<script>
export default {
  name: 'startExPage',
  data(){
    return{
    }
  },
  components: {
  }
}
</script>

<style>
body {
  width: 100%;
  margin: 0px auto;
}
h1{
  margin-top: 8%;
  font-size: 30pt;
  float: center;
}
/*버튼*/
.choose1, .choose2, .choose3 {
  float: left;
  margin-top: 0.5%;
  margin-left: 8%;
  font-size: 10mm;
}
.choose1 {
  margin-left: 13%;
}
.choose4, .choose5 {
    float: right;
    margin-top: 0.5%;
    margin-right: 8%;
    font-size: 10mm;
}
.choose4 {
    margin-right: 22%;
}
.choose5 {
    margin-right: 12%;
}
.li-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 40px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 200px;
  height: 200px;
  margin: 0px;
}
.li-bt:hover{
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}
.w-bt {
  border: 2px solid #a3a1a1;
  color: #ffffff;
}
img {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 20px;
  left: 18px;
}


/* .arrow {
        display: inline-block;
        background: black;
        position: relative;
        margin-right: -30px;
    }

.arrow.top, .arrow.bottom {
       width: 10px;
       height: 20px;
    }

.arrow.left, .arrow.right {
       width: 20px;
       height: 10px;
       top: -270px;
       left: 150px;
    }

.arrow:after {
       content: '';
       position: absolute;
       width: 0;
       height: 0;
       border-style: solid;
    }

.arrow.top:after {
       top: -40px;
       left: -10px;
       border-width: 40px 35px;
       border-color: transparent transparent black transparent;
    }

.arrow.bottom:after {
       top: 20px;
       left: -10px;
       border-width: 20px 15px;
       border-color: black transparent transparent transparent;
    }

.arrow.left:after {
       top: -10px;
       left: -40px;
       border-width: 15px 20px;
       border-color: transparent black transparent transparent;
    }

.arrow.right:after {
       top: -10px;
       left: 20px;
       border-width: 15px 20px;
       border-color: transparent transparent transparent black;
    } */
</style>
