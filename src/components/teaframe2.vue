<template>
  <body>
    <div class="left">
      <button class="l-triangle"></button>
    </div>
    <div class="center">
      <div class="choose-m">
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="hot" src="./pic/tea/국화.png" /></button
          ><br /><br />국화차(HOT<br />2,000원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="hot" src="./pic/tea/감잎.png" /></button
          ><br /><br />감잎차(HOT)<br />2,000원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="hot-sd" src="./pic/tea/캐모마일.png" /></button
          ><br /><br />캐모마일(HOT)<br />2,000원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="hot-tp" src="./pic/tea/애플시나몬(HOT).png" /></button
          ><br /><br />애플시나몬(HOT)<br />3,500원
        </div>
      </div>
      <div class="choose-m">
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="ice" src="./pic/tea/애플시나몬(ICED).png" /></button
          ><br /><br />애플시나몬(ICED)<br />3,500원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="ice" src="./pic/tea/아이스티.png" /></button
          ><br /><br />아이스티<br />3,000원
        </div>
      </div>
    </div>
    <div class="right">
      <button class="r-triangle"></button>
    </div>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
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
}

div.left {
  width: 6%;
  height: 800px;
  float: left;
  box-sizing: border-box;
  background: none;
}

div.center {
  width: 88%;
  height: 800px;
  float: left;
  box-sizing: border-box;
  background: none;
}

div.right {
  width: 6%;
  height: 800px;
  float: left;
  box-sizing: border-box;
  background: none;
  margin-left: 0%;
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
  width: 85px;
  height: 155px;
  float: center;
}
img.hot {
  width: 155px;
  height: 120px;
  float: center;
}
img.hot-sd {
  width: 155px;
  height: 130px;
  float: center;
}
img.hot-tp {
  width: 155px;
  height: 135px;
  float: center;
}

/*페이지 버튼*/
.l-triangle {
  width: 30px;
  height: 30px;
  float: left;
  background: none;
  border-right: 60px solid #6f6f6e;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  margin-top: 450%;
}

.l-triangle:hover {
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}

.r-triangle {
  width: 30px;
  height: 30px;
  float: left;
  background: none;
  border-left: 60px solid #6f6f6e;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  margin-left: 5%;
  margin-top: 450%;
}

.r-triangle:hover {
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}
</style>
