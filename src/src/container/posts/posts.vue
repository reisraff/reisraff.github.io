<script type="text/javascript" src="./posts.js"></script>
<style type="text/css" src="./posts.css"></style>
<template>
  <div class="has-background-grey-dark hero is-fullheight site">
    <div class="hero-body is-normal-alignment">
      <div class="container has-text-white">
          <mainMenu></mainMenu>

          <router-link v-for="(post, index) in posts" :to="{ name: 'post', params: { 'lang': post.lang, 'postId': post.postId[post.lang] }}">
            <div class="post-container" :class="{'has-background-grey': index % 2 === 0, '': index % 2 !== 0 }">

              <section class="section post-title">
                  <h2 class="title has-text-white-bis">{{ post.title[post.lang] }}</h2>
              </section>

              <section class="datetime">
                <span>{{ post.datetime }}</span>
              </section>

              <section class="content post-preview" v-html="post.preview[post.lang]"></section>
            </div>
          </router-link>

          <p>
            <a href="javascript://" @click="paginate(page)" v-if="pages + 1 > page">{{ trans[lang].more }}</a>
          </p>

      </div>
    </div>
    <div class='hero-footer'>
      <div class="container">
        <mainFooter></mainFooter>
      </div>
    </div>
  </div>
</template>
