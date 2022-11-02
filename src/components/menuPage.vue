<template>
    <body>
        <header>
            <div>
                <table>
                    <tr>
                        <td>
                            <img alt="logo" src="./pic/logo.png" class="logo"/>
                        </td>
                        <td>
                            <h2>메뉴를 선택해주세요</h2>
                        </td>
                        <td>
                            <form name="sform" action="https://search.google.com/search" method="get">
                                <input name="q" type="search" placeholder="검색어를 입력해 주세요" class="input_txt">     
                            </form>
                        </td>
                        <td>
                            <img alt="search" src="./pic/search.png" class="search"/>
                        </td>
                    </tr>
                </table>
            </div>
        </header>
        <nav>
            <div class="menu">
                <ul>
                    <li >
                        <a> 커피(COFFEE) </a>
                    </li>
                    <li >
                        <a> 음료(NON COFFEE) </a>
                    </li>
                    <li >
                        <a> 주스/에이드(JUICE/ADE) </a>
                    </li>
                    <!--<li >
                        <a> 스무디/쉐이크(BLENDED) </a>
                    </li>-->
                    <li >
                        <a> 차(TEA) </a>
                    </li>
                    <li>
                        <a> 디저트(DESSERT) </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="framebox">
            <iframe class="show" frameborder="0"></iframe>
        </div>
        <div class="basket">

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
    width: 1024px;
    height: 768px;
    margin: 0px auto;
    float: left;
}
nav {
    float: left;
    width: 75%;
    height: 6.5%;
    box-sizing: border-box;
}
/*메뉴*/
ul li {
    list-style-type: none;
    float: center;
}
.menu {
    border: none;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    text-align: center;
}
.menu ul{
    background-color: #FFE600;
    height: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    float: center;
}
.menu li {
    float: left;
    padding: 0;
    margin-left: 5px;
}
.menu li a {
    background-color: #FFE600;
    color: #000000;
    display: block;
    font-weight: normal;
    line-height: 50px;
    margin: 0px;
    padding: 0px 25px;
    text-align: center;
    text-decoration: none;
}
.menu li a:hover, .menu ul li:hover a{
    background: #a3a1a1;
    color: #ffffff;
    text-decoration: none;
}
.menu p{
    clear:center;
}

/*상단*/
header {
    width: 75%;
    height: 7%;
    padding: 0px;
    text-align: center;
    position: relative;
    background: #ffffff;
    margin: 0px;
    float: left;
}
table{
    width: 100%;
    margin-left:auto; 
    margin-right:auto;
}
td {
    padding: 0px;
    margin: 0px;
    text-align: center;
}
header h2 {
    float: center;
}
.logo {
    width: auto;
    height: 50px;
    margin: 0px;
    float: left;
}
.search {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    padding: 0px;
}
form {
    float: right;
}
.show {
    float: left;
    width: 100%;
    height: 100%;
    margin: 0px;
    display: block;
}
.framebox {
    float: left;
    width: 57%;
    height: 75%;
    padding: 0%;
    margin-top: 0%;
    background: #ffeeef;
}
/*장바구니*/
.basket {
    float: left;
    width: 18%;
    height: 80%;
    margin-top: 0%;
    background-color: #eeeeee;
}
</style>