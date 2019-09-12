<style src="./mainMenu.css"></style>
<script src="./mainMenu.js"></script>
<template>
  <nav class="navbar is-fixed-top container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <router-link :to="{ name: 'home', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white has-background-grey-dark">Rafael Reis</router-link> -->

      <a role="button" class="navbar-burger burger has-text-white" v-bind:class="{ 'is-active': menuOpened }" aria-label="menu" aria-expanded="false" @click="menuOpened = !menuOpened">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu has-background-grey-dark" v-bind:class="{ 'is-active': menuOpened }">
      <div class="navbar-end">

        <router-link :to="{ name: 'home', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].home }}</router-link>

        <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">|</span>
        <router-link :to="{ name: 'home', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].madeByMe }}</router-link>

        <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">|</span>
        <router-link :to="{ name: 'home', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].posts }}</router-link>

      </div>
    </div>
  </nav>
</template>
