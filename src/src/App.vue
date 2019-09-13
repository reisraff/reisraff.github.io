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
  padding-top: 2em;
  /*display: table;*/
}

.is-normal-alignment {
  align-items: normal !important;
}

a {
  color: hsl(141, 71%, 48%);
}

a:hover {
  color: hsl(48, 100%, 67%);
}

strong {
  color: #fff;
}

p {
  margin-top: 14px;
  margin-bottom: 14px;
}

.app {
  display: block;
}

body {
  display: block;
}

@media only screen and (max-width: 414px) {
  .app {
    display: flex;
  }
}

</style>
