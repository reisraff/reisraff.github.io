<style src="./index.css"></style>
<script src="./index.js"></script>

<template>
  <div class="container less-container">

    <section class="hero">
      <div class="hero-body">
        <div class="container top">
          <div class="spacing">
            <img src="../../assets/image/alert.png" />
          </div>

          <div class="spacing">
            <h1 class="title">{{ trans[lang].title }}</h1>
          </div>

          <div class="spacing">
            <span class="subtitle" v-html="trans[lang].subtitle">
            </span>
          </div>

          <div class="spacing">
            <label class="checkbox">
              <input type="checkbox" />
              {{ trans[lang].checkbox }}
            </label>
          </div>

          <div class="spacing columns">
            <div class="column is-paddingless">
              <a href="javascript://" @click="showAdvanced = !showAdvanced">
                {{ showAdvanced ? trans[lang].showLess : trans[lang].advanced }}
              </a>
            </div>
            <div class="column is-paddingless">
              <a class="button is-pulled-right has-background-blue" href="javascript://" @click="reload()">{{ trans[lang].reload }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section" v-if="showAdvanced">
      <div class="container">
        <div class="spacing">
          <span class="subtitle" v-html="trans[lang].proceed">
          </span>
        </div>

        <div class="spacing">
          <router-link :to="{ name: 'home', params: { 'lang': lang }}">{{ trans[lang].go }}</router-link>
        </div>
      </div>
    </div>

  </div>
</template>
