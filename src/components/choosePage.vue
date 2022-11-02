<template>
  <body>
    <div>
      <h1>식사하실 장소를 선택해 주세요</h1>
      <table>
        <tr>
          <td>
            <button  class="li-bt w-bt">
              <img alt="menu" src="./pic/icon2.png" />
            </button>
          </td>
          <td>
            <button  class="li-bt w-bt">
              <img alt="menu" src="./pic/icon4.png" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            포장
          </td>
          <td>
            매장에서 식사
          </td>
        </tr>
      </table>
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
body {
  width: 100%;
  margin: 0px auto;
}
h1{
  margin-top: 8%;
  font-size: 18pt;
}

/*테이블*/
table{
  margin-left:auto; 
  margin-right:auto;
  margin-top: 8%;
}
td {
  padding: 15px 60px;
  text-align: center;
  font-size: 20pt;
}

/*버튼*/
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