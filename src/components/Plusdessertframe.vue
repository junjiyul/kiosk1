<template>
    <body>
        <div class="center">
            <div class="choose-m">
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="mac" src="./pic/dessert/오레오마카롱.png" />
                    </button><br>오레오마카롱<br>3,800원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="cro" src="./pic/dessert/플레인크로플.png" />
                    </button><br>플레인크로플<br>3,500원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="muffin" src="./pic/dessert/블루베리머핀.png" />
                    </button><br>블루베리머핀<br>3,800원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="muffin" src="./pic/dessert/초코머핀.png" />
                    </button><br>초코머핀<br>3,500원
                </div>
            </div>
            <div class="choose-m">
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="ti" src="./pic/dessert/티라미수.png" />
                    </button><br>티라미수<br>3,500원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="cake" src="./pic/dessert/치즈케이크.png" />
                    </button><br>치즈케이크<br>3,500원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="cake" src="./pic/dessert/초코무스케이크.png" />
                    </button><br>초코무스케이크<br>3,500원
                </div>
                <div>
                    <button class="menu-bt m-bt">
                        <img alt="menu" class="cake" src="./pic/dessert/고구마케이크.png" />
                    </button><br>고구마케이크<br>3,500원
                </div>
            </div>
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
    margin: 0px auto;
    float: left;
}

div {
    float: left;
    font-size: 25pt;
    background:none;
}

div.center {
    width: 100%;
    height: 800px;
    float: left;
    box-sizing: border-box;
    background: none;
    align-items: center;
    margin-left: 5%;
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
    width: 200px;
    height: 200px;
    margin-left: 50px;
    margin-top: 70px;
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
img.cro {
    width: 180px;
    height: 110px;
    float: center;
}

img.cake {
    width: 175px;
    height: 100px;
    float: center;
}
img.muffin {
    width: 170px;
    height: 160px;
    float: center;
}
img.mac {
    width: 170px;
    height: 140px;
    float: center;
}
img.ti {
    width: 175px;
    height: 120px;
    float: center;
}
</style>
