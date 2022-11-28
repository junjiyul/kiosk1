

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

<style lang="scss">
@import "/src/assets/css/app.scss";
</style>
