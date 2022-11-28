<template>
  <div class="all">
    <div class="basket1">
      <h3 class="top">메뉴 수량 가격</h3>
    </div>
    <div class="basket2"></div>
    <div class="basket3"></div>
    <button class="bs-bt1">
      <h1 class="white">취소하기</h1>
    </button>
    <button class="bs-bt2">
      <h2 class="red">결제하기</h2>
    </button>
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
.all {
  float: left;
  width: 1280px;
  height: 800px;
  margin: 0px;
}
.basket1 {
  width: 1120px;
  height: 90px;
  background: #d0d0d0;
  border: 1px solid #000000;
  float: center;
  margin-left: 6%;
  margin-top: 3%;
  content: center;
}

.basket2 {
  width: 1120px;
  height: 290px;
  background: #ffffff;
  border: 1px solid #000000;
  float: center;
  margin-left: 6%;
  margin-top: 0%;
}

.basket3 {
  width: 1120px;
  height: 90px;
  background: #e6e6e6;
  border: 1px solid #000000;
  float: center;
  margin-left: 6%;
  margin-top: 1%;
}
.bs-bt1 {
  position: relative;
  width: 550px;
  height: 110px;
  margin-top: 6%;
  margin-right: 1.5%;
  border: 3.5px solid #000000;
  background: #5c5757;
  float: center;
}
.bs-bt2 {
  position: relative;
  width: 550px;
  height: 110px;
  margin-top: 6%;
  margin-right: 0%;
  border: 3.5px solid #f23838;
  float: center;
  background: white;
}
.white {
  font-size: 40pt;
  color: #ffffff;
  text-align: center;
  line-height: 5px;
}
.red {
  font-size: 40pt;
  color: #f23838;
  text-align: center;
  line-height: 5px;
}
.top {
  font-size: 25pt;
  color: #000000;
  text-align: center;
  line-height: 30px;
  word-spacing: 350px;
}
</style>
