<template>
  <div id="app">
<!--    <startPage />-->
<!--    <choosePage />-->
    <menuPage />
    <!--<frame1 />-->
  </div>
</template>

<script>
// import startPage from "./components/startPage";
// import choosePage from "@/components/choosePage";
import menuPage from "./components/menuPage";
//import frame1 from "./components/frame1";

export default {
  name: 'App',
  components: {
    // startPage,
    // choosePage,
    menuPage,
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
