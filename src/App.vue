

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'startExPage',
  components: {},
  setup()
  {
    useRoute();
  }
,
};
</script>

<template>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
