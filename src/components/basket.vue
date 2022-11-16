<template>
    <body>
        <div class="basket1">

        </div>
        <div class="basket2">
        
        </div>
        <div class="basket3">
        
        </div>
        <div class="basket4">
            <button class="bs-bt1">

            </button>
            <button class="bs-bt2">
            
            </button>
        </div>
    </body>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
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
    margin-top: 0px;
    float: left;
    background: lightblue;
}

div.basket1 {
    width: 1150px;
    height: 80px;
    background: #D0D0D0;
    border: 1px solid #000000;
    float: center;
    margin-left: 5%;
    margin-top: 3%;
}

div.basket2 {
    width: 1150px;
    height: 350px;
    background: #ffffff;
    border: 1px solid #000000;
    float: center;
    margin-left: 5%;
    margin-top: 0.1%;
}

div.basket3 {
    width: 1150px;
    height: 70px;
    background: #E6E6E6;
    border: 1px solid #000000;
    float: center;
    margin-left: 5%;
    margin-top: 1%;
}
</style>
