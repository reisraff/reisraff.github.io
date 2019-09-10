<style src="./mainMenu.css"></style>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <router-link to="/home" class="main-menu-item has-text-white">Rafael Reis</router-link>

    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">

            <router-link to="/home" class="main-menu-item has-text-white">Home</router-link>
            <span class="has-text-white">|</span>
            <router-link to="/home" class="main-menu-item has-text-white">Made by me</router-link>
            <span class="has-text-white">|</span>
            <router-link to="/home" class="main-menu-item has-text-white">Posts</router-link>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
