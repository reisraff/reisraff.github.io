<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

.site {
  font-family: 'Source Code Pro', monospace;
}

.is-normal-alignment {
  align-items: normal !important;
}
</style>
