

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
@import "/dist/css/app";
</style>
