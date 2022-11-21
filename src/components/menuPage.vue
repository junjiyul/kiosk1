<template>
    <body>
        <header>
            <div>
                <table>
                    <tr>
                        <td>
                            <img alt="logo" src="./pic/logo.png" class="logo"/>
                        </td>
                        <td>
                            <h2>메뉴를 선택해주세요</h2>
                        </td>
                        <td>
                            <form name="sform" action="https://search.google.com/search" method="get">
                                <input name="q" type="search" placeholder="검색어를 입력해 주세요" class="input_txt">     
                            </form>
                        </td>
                        <td>
                            <img alt="search" src="./pic/search.png" class="search"/>
                        </td>
                    </tr>
                </table>
            </div>
        </header>
        <nav>
            <div class="menu">
                <ul>
                    <li >
                        <a @click="goToX('/choosePage')"> 커피(COFFEE) </a>
                    </li>
                    <li >
                        <a> 음료(NON COFFEE) </a>
                    </li>
                    <li >
                        <a> 주스/에이드(JUICE/ADE) </a>
                    </li>
                    <!--<li >
                        <a> 스무디/쉐이크(BLENDED) </a>
                    </li>-->
                    <li >
                        <a> 차(TEA) </a>
                    </li>
                    <li>
                        <a> 디저트(DESSERT) </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="framebox">
            <iframe class="show" frameborder="0"></iframe>

        </div>
        <div class="basket">
          <div class="basket-fir"></div>
          <div class="basket-aop">
            <div>총 결제 금액</div>
            <p>0</p>
          </div>
          <div class="basket-cart">
            <div class="cart-basket">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 520"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/>
            </svg>
              <span>장바구니</span></div></div>
          <div class="basket-cart-sec">
            <div class="cart-basket-sec">
              <svg width="96" height="99" viewBox="0 0 96 99" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="96" height="99" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_10_4" transform="translate(-0.0212912) scale(0.0113324 0.010989)"/>
                  </pattern>
                  <image id="image0_10_4" width="80" height="80" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <span>결제하기</span></div></div>
        </div>
    </body>
</template>

<script>


import router from "@/router";

export default {
  name: 'App',
  data(){
    var goToX = function goToX(v) {
      v ? router.push(v) : window.alert("준비중입니다.")
    }


    return{
      goToX,
    }
  },
  components: {
  }
}
</script>

<style scoped>
body{
    width: 1024px;
    height: 768px;
    margin: 0px auto;
    float: left;
}
nav {
    float: left;
    width: 75%;
    height: 6.5%;
    box-sizing: border-box;
}
/*메뉴*/
ul li {
    list-style-type: none;
    float: center;
}
.menu {
    border: none;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    text-align: center;
}
.menu ul{
    background-color: #FFE600;
    height: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    float: center;
}
.menu li {
    float: left;
    padding: 0;
    margin-left: 5px;
}
.menu li a {
    background-color: #FFE600;
    color: #000000;
    display: block;
    font-weight: normal;
    line-height: 50px;
    margin: 0px;
    padding: 0px 25px;
    text-align: center;
    text-decoration: none;
}
.menu li a:hover, .menu ul li:hover a{
    background: #a3a1a1;
    color: #ffffff;
    text-decoration: none;
}
.menu p{
    clear:center;
}

/*상단*/
header {
    width: 75%;
    height: 7%;
    padding: 0px;
    text-align: center;
    position: relative;
    background: #ffffff;
    margin: 0px;
    float: left;
}
table{
    width: 100%;
    margin-left:auto; 
    margin-right:auto;
}
td {
    padding: 0px;
    margin: 0px;
    text-align: center;
}
header h2 {
    float: center;
}
.logo {
    width: auto;
    height: 50px;
    margin: 0px;
    float: left;
}
.search {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    padding: 0px;
}
form {
    float: right;
}
.show {
    float: left;
    width: 100%;
    height: 100%;
    margin: 0px;
    display: block;
}
.framebox {
    float: left;
    width: 57%;
    height: 75%;
    padding: 0%;
    margin-top: 0%;
    background: #ffeeef;
}
/*장바구니*/
.basket {
  float: left;
  width: 18%;
  height: 74.3%;
  margin-top: 0%;
  background-color: #eeeeee;
}
.basket-fir {
  height: 30%;
  width: 100%;
  background-color: #a3a1a1;
}
.basket-aop {
  height: 20%;
  border: solid 1.5px;
  border-bottom: none;
}
.basket-aop > div {
  margin: 23px;
  font-size: 20px;
}
.basket-aop > p {
  font-weight: bold;
  font-size: 34px;
  margin: 0 auto;
  text-align: right;
  width: 70%;
}
.basket-cart {
  position: relative;
  text-align: center;
  border: solid 1.5px;
  height: 25%;
}

.cart-basket {
  display: inline-block;
  writing-mode: vertical-lr;
  padding: 11px;
  top: 20%;
  position: relative;
}
.cart-basket > svg {
  position: relative;
  padding-right: 26px;
}
.cart-basket > span {
  position: relative;
  font-size: 20px;
}
.basket-cart-sec {
  position: relative;
  text-align: center;
  border: solid 1.5px;
  height: 25%;
  border-top: none;
}

.cart-basket-sec {
  display: inline-block;
  writing-mode: vertical-lr;
  padding: 23px;
  position: relative;

}
.cart-basket-sec > svg {
  position: relative;
  padding-right: 26px;
}
.cart-basket-sec > span {
  position: relative;
  font-size: 20px;
  display: inline-block;
}

</style>
