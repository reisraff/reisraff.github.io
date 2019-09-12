<script type="text/javascript" src="./post.js"></script>
<style type="text/css" src="./post.css"></style>
<template>
  <div class="has-background-grey-dark hero is-fullheight site">
    <div class="hero-body is-normal-alignment">
      <div class="container has-text-white">
          <mainMenu></mainMenu>

          <div class="section">
            <div class="section post-title">
              <h1 class="title has-text-white">
                {{ post.title }}
              </h1>
            </div>

            <div class="section post-body has-text-white" v-html="post.body">
            </div>
          </div>

      </div>
    </div>
    <div class='hero-footer'>
      <div class="container">
        <mainFooter></mainFooter>
      </div>
    </div>
  </div>
</template>
