<style src="./notFound.css"></style>
<script src="./notFound.js"></script>
<template>
  <div>
    <router-link :to="{ name: 'home', params: { 'lang': lang }}">{{ trans[lang].goToHome }}</router-link>
  </div>
</template>
