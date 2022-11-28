<template>
  <body>
  <div class="center">
    <div class="choose-m">
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/콜드브루라떼.png" />
        </button><br><br>오레오 스모어 쿠키<br><br>3,800원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/바닐라라떼(ICED).png" />
        </button><br><br>비스코프 스모어 쿠키<br><br>3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/콜드브루라떼.png" />
        </button><br><br>소금빵<br><br>3,800원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="hot" src="./pic/coffee/바닐라라떼(HOT).png" />
        </button><br><br>인절미 크로플<br><br>3,500원
      </div>
    </div>
    <div class="choose-m">
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/아인슈페너(ICED).png" />
        </button><br><br>스콘<br><br>3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/아인슈페너(ICED).png" />
        </button><br><br>마카롱<br><br>3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/아인슈페너(ICED).png" />
        </button><br><br>마들렌<br><br>3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/coffee/아인슈페너(ICED).png" />
        </button><br><br>에그타르트<br><br>3,500원
      </div>
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
  components: {
  }
}
</script>

<style scoped>
body {
  width: 1280px;
  height: 800px;
  margin: 0px auto;
  float: left;
}

div {
  float: left;
  font-size: 19pt;
  background: #6f6f6e;
}

div.center {
  width: 100%;
  height: 800px;
  float: left;
  box-sizing: border-box;
  background: none;
  align-items: center;
  margin-left: 5%;
}

div.choose-m {
  float: center;
  margin-left: 0%;
}

/*메뉴 버튼*/
.menu-bt {
  position: relative;
  padding: 3px 3px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 180px;
  height: 180px;
  margin-left: 55px;
  margin-top: 75px;
  margin-right: 45px;
  background: none;
}

.menu-bt:hover {
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}

.m-bt {
  border: 2px solid #a3a1a1;
  color: #ffffff;
}

/*이미지*/
img.ice {
  width: 80px;
  height: 150px;
  float: center;
}

img.hot {
  width: 130px;
  height: 130px;
  float: center;
}
</style>
