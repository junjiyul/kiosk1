<template>
  <div class="center">
    <div class="choose-m">
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./ade/레몬에이드.png" /></button
        ><br />레몬에이드<br />3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./ade/자몽에이드.png" /></button
        ><br />자몽에이드<br />3,500원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img
            alt="menu"
            class="ice-tp"
            src="./ade/자몽히비스커스에이드.png"
          /></button
        ><br />자몽히비스커스에이드<br />3,900원
      </div>
      <div>
        <button class="menu-bt m-bt">
          <img alt="menu" class="ice" src="./ade/청포도에이드.png" /></button
        ><br />청포도에이드<br />3,800원
      </div>
    </div>

    <div class="choose-m">
      <div>
        <button class="menu-bt2 m-bt">
          <img alt="menu" class="ice-tp" src="./ade/자두에이드.png" /></button
        ><br />자두에이드<br />3,800원
      </div>
      <div>
        <button class="menu-bt2 m-bt">
          <img alt="menu" class="ice" src="./ade/자몽주스.png" /></button
        ><br />자몽주스<br />3,900원
      </div>
      <div>
        <button class="menu-bt2 m-bt">
          <img alt="menu" class="ice" src="./ade/키위주스.png" /></button
        ><br />키위주스<br />3,900원
      </div>
      <div>
        <button class="menu-bt2 m-bt">
          <img alt="menu" class="ice" src="./ade/홍시주스.png" /></button
        ><br />홍시주스<br />4,000원
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
  font-size: 25pt;
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
  margin-left: 2%;
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
  margin-left: 50px;
  margin-top: 70px;
  margin-right: 35px;
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
  margin-left: 60px;
  margin-top: 70px;
  margin-right: 40px;
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
  width: 95px;
  height: 175px;
  float: center;
}
img.ice-tp {
  width: 90px;
  height: 180px;
  float: center;
}
</style>
