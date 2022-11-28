<template>
  <div class="center">
    <div class="choose-m">
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/레몬에이드.png" /></button
        ><br /><br />레몬 에이드<br /><br />3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/자몽에이드.png" /></button
        ><br /><br />자몽 에이드<br /><br />3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img
              alt="menu"
              class="ice-tp"
              src="./pic/ade/자몽히비스커스에이드.png"
          /></button
        ><br /><br />자몽 히비스커스 에이드<br /><br />3,900원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/청포도에이드.png" /></button
        ><br /><br />청포도 에이드<br /><br />3,800원
      </div>
    </div>
    <div class="choose-m">
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice-tp" src="./pic/ade/자두에이드.png" /></button
        ><br /><br />자두 에이드<br /><br />3,800원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/자몽주스.png" /></button
        ><br /><br />자몽 주스<br /><br />3,900원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/키위주스.png" /></button
        ><br /><br />키위 주스<br /><br />3,900원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./pic/ade/홍시주스.png" /></button
        ><br /><br />홍시 주스<br /><br />4,000원
      </div>
    </div>
  </div>
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
div {
  float: left;
  font-size: 19pt;
  background: none;
}

div.center {
  width: 1280px;
  height: 800px;
  float: left;
  box-sizing: border-box;
  background: none;
  align-items: center;
  margin: 0px;
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
img.ice-tp {
  width: 80px;
  height: 155px;
  float: center;
}
</style>
