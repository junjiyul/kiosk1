<template>
  <body>
    <div>
      <h1>식사하실 장소를 선택해 주세요</h1>
      <div class="choose1">
        <button class="li-bt w-bt" @click="goTo('/PlusmenuPage')">
          <img alt="menu" src="./pic/icon6.png" />
        </button>
        <br><br>포장
      </div>
      <div class="choose2" @click="goTo('/PlusmenuPage')">
        <button class="li-bt w-bt">
          <img alt="menu" src="./pic/icon7.png" />
        </button>
        <br><br>매장에서 식사
      </div>
    </div>

  </body>
</template>

<script>
export default {
  name: 'EXchoosePage',
  data(){

    return{
    }
  },
  methods: {
    goTo:function (v){
      this.$router.push(v);
    },


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
  margin-top: 8.5%;
  font-size: 60pt;
  text-align: center;
}
/*버튼*/
.choose1, .choose2 {
  float: left;
  margin-top: 2%;
  margin-left: 10%;
  font-size: 15mm;
  text-align: center;
}
.choose1 {
 text-align: center;
  margin-left: 24%;
}
.li-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 40px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 400px;
  height: 400px;
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
  width: 360px;
  height: 360px;
}
</style>
