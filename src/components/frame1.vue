<template>
    <body>
        <table>
            <tr>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                   커피 
                </td>
                <td>
                    커피
                </td>
                <td>
                    커피
                </td>
                <td>
                    커피
                </td>
            </tr>
            <tr>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
                <td>
                    <button  class="menu-bt m-bt">
                        <img alt="menu" src="./pic/icon2.png" />
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                   커피 
                </td>
                <td>
                    커피
                </td>
                <td>
                    커피
                </td>
                <td>
                    커피
                </td>
            </tr>
        </table>
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
table{
    width: 100%;
    margin-left:auto; 
    margin-right:auto;
    margin-top: 8%;
}
td {
    padding: 0px;
    margin: 0px;
    text-align: center;
}

.menu-bt{
    position: relative;
    padding: 3px 3px;
    border-radius: 30px;
    box-shadow: 0 15px 35px rbga(0, 0, 0, 0.2);
    transition: 0.25s;
    width: 150px;
    height: 150px;
    margin: 20px;
}
.menu-bt:hover{
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
}
.m-bt {
    border: 2px solid #a3a1a1;
    color: #ffffff;
}
img {
    width: 120px;
    height: 120px;
}
</style>
