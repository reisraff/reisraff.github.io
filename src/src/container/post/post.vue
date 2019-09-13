<script type="text/javascript" src="./post.js"></script>
<style type="text/css" src="./post.css"></style>
<template>
  <div class="has-background-grey-dark hero is-fullheight site">
    <div class="hero-body is-normal-alignment">
      <div class="container has-text-white">
          <mainMenu></mainMenu>

          <div class="content">
            <div class="content post-title">
              <h1 class="title has-text-white">
                {{ post.title }}
              </h1>
            </div>

            <div class="content post-body has-text-white" v-html="post.body">
            </div>
          </div>

          <div class="content">
            <div class="comments">
              <vue-disqus shortname="reisraff" :identifier="post.id" :url="url"></vue-disqus>
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
