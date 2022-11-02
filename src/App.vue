<template>
  <div id="app">
    <start_ />
    <!--<choose_01 />-->
    <!--<menu_01 />-->
    <!--<frame1 />-->
  </div>
</template>

<script>
import start_ from "./components/start_";
//import choose_01 from "./components/choose_01";
//import menu_01 from "./components/menu_01";
//import frame1 from "./components/frame1";

export default {
  name: 'App',
  components: {
    start_
    //choose_01
    //menu_01
    //frame1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
