<style src="./mainMenu.css"></style>
<script src="./mainMenu.js"></script>
<template>
  <nav class="navbar is-fixed-top container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand main-menu">
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

        <!-- <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">|</span>
        <router-link :to="{ name: 'home', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].madeByMe }}</router-link> -->

        <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">|</span>
        <router-link :to="{ name: 'posts', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].posts }}</router-link>

        <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">|</span>
        <router-link :to="{ name: 'byte-off', params: { 'lang': lang }}" class="navbar-item main-menu-item has-text-white">{{ trans[lang].byteOff }}</router-link>

        <span class="navbar-item main-menu-separator has-text-white" v-if="!menuOpened">-</span>

        <div class="is-pulled-right padding-20">
          <a href="javascript://" @click="changeLanguage('pt')" v-if="lang != 'pt'"><img src="../../assets/image/brazil_flag.png" /></a>
          <a href="javascript://" @click="changeLanguage('es')" v-if="lang != 'es'"><img src="../../assets/image/spain_flag.png" /></a>
          <a href="javascript://" @click="changeLanguage('en')" v-if="lang != 'en'"><img src="../../assets/image/usa_flag.png" /></a>
        </div>
      </div>
    </div>
  </nav>
</template>
