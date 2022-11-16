<template>
  <body>
    <div>
      <h1>식사하실 장소를 선택해 주세요</h1>
      <div class="choose1">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon2.png" />
        </button>
        <br><br>포장
      </div>
      <div class="choose2">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon4.png" />
        </button>
        <br><br>매장에서 식사
      </div>
      <router-view />
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
  margin: 0px;
  margin-top: 0%;
}
h1{
  margin-top: 8%;
  font-size: 18pt;
  float: center;
}
/*버튼*/
.choose1, .choose2 {
  float: left;
  margin-top: 10%;
  margin-left: 8%;
  font-size: 10mm;
}
.choose1 {
  margin-left: 27%;
}
.li-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 40px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 250px;
  height: 250px;
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
  width: 150px;
  height: 150px;
}
</style>