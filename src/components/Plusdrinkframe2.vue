<template>
  <body>
    <div class="left">
      <button class="l-triangle"></button>
    </div>
    <div class="center">
      <div class="choose-m">
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="ice" src="./pic/drink/흑당버블티.png" /></button
          ><br />흑당버블티<br />(ICED ONLY)<br />3,500원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="ice-w" src="./pic/drink/녹차프라푸치노.png" /></button
          ><br />녹차프라푸치노<br />3,900원
        </div>
        <div>
          <button class="menu-bt m-bt">
            <img alt="menu" class="ice-w" src="./pic/drink/초코칩프라푸치노.png" /></button
          ><br />초코칩프라푸치노<br />3,900원
        </div>
      </div>
      <div class="choose-m">
        <div>
          <button class="menu-bt2 m-bt">
            <img alt="menu" class="ice-w" src="./pic/drink/딸기젤라또프라푸치노.png" /></button
          ><br />딸기프라푸치노<br />4,300원
        </div>
        <div>
          <button class="menu-bt2 m-bt">
            <img alt="menu" class="ice-w" src="./pic/drink/초코젤라또프라푸치노.png" /></button
          ><br />초코프라푸치노<br />4,300원
        </div>
        <div>
          <button class="menu-bt2 m-bt">
            <img alt="menu" class="ice" src="./pic/drink/요거트프라푸치노.png" /></button
          ><br />요거트프라푸치노<br />3,500원
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
  name: "PlusdrinkFrame2",
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
  font-size: 25pt;
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
  margin-left: 5%;
}

/*메뉴 버튼*/
.menu-bt {
  position: relative;
  padding: 3px 3px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 200px;
  height: 200px;
  margin-left: 70px;
  margin-top: 60px;
  margin-right: 70px;
  background: none;
}
.menu-bt2 {
  position: relative;
  padding: 3px 3px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 200px;
  height: 200px;
  margin-left: 70px;
  margin-top: 60px;
  margin-right: 70px;
  background: none;
}
.menu-bt:hover {
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}
.menu-bt2:hover {
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
  width: 100px;
  height: 170px;
  float: center;
}

img.ice-w {
  width: 90px;
  height: 180px;
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
