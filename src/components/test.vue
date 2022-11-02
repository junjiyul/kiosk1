<template>
  <body>
    <div class="container">
      <section>
      <h1>키오스크 이용안내</h1>
      <button class="st-bt gray-bt">
          <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <button class="st-bt gray-bt">
          <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <button class="st-bt gray-bt">
          <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <button class="st-bt gray-bt">
          <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <button class="st-bt gray-bt">
          <img alt="menu" src="./pic/icon1.png" width="70" height="75"/>
      </button>
      <table>
        <tr>
          <td>
            메뉴를 선택해주세요
          </td>
          <td>
            장바구니에서 메뉴<br>확인 후 결제해 주세요
          </td>
          <td>
            카드 투입구에카드를<br>넣어 결제해 주세요
          </td>
          <td>
            영수증에 적힌 주문번호를<br>확인해 주세요
          </td>
          <td>
            카운터에서 제품을<br>수령해 주세요
          </td>
        </tr>
      </table>
      </section>
      <aside>
        <button class="help-bt c-bt">
          화면 확대
        </button>
        <button class="help-bt c-bt">
          직원 호출
        </button>
        <button class="help-bt c-bt">
          장애인
        </button>
      </aside>
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

<style>
body{
  width: 100%;
  margin: 0px auto;
}
.container {
  widows: auto;
  margin: 0px;
}
table{
  margin-left:auto; 
  margin-right:auto;
  border-collapse: collapse;
}
td {
  padding: 0px 35px;
  text-align: center;
}
section {
  width: 80%;
  height: 550px;
  padding: 30px;
  align-content: center;
  float: left;
  background-color: #a3a1a1;
}
aside {
  width: 9.8%;
  height: 550px;
  padding: 30px;
  align-content: center;
  float: right;
  background-color: lightgray;
}

/*버튼*/
.st-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
  transition: 0.25s;
  width: 120px;
  height: 120px;
  margin: 34px;
}
.gray-bt {
  border: 2px solid #ffffff;
  color: #ffffff;
}
.help-bt{
  position: relative;
  padding: 3px 3px;
  border-radius: 50%;
  transition: 0.25s;
  width: 100px;
  height: 100px;
  margin: 15px;
}
.help-bt:hover{
  letter-spacing: 2px;
  transform: scale(1.2);
  cursor: pointer;
}
.c-bt {
  border: 2px solid #a3a1a1;
  color: #000000;
}
</style>