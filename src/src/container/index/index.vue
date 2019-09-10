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
            <h1 class="title">You're almost there, just read and go</h1>
          </div>

          <div class="spacing">
            <span class="subtitle">
              Attackers always is trying to steal your information (for example, passwords, messages or credit cards)! Welcome to my page <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR
            </span>
          </div>

          <div class="spacing">
            <label class="checkbox">
              <input type="checkbox" />
              Automatically report details of possible security incidents to Everyone.
            </label>
          </div>

          <div class="spacing columns">
            <div class="column is-paddingless">
              <a href="javascript://" @click="showAdvanced = !showAdvanced">
                {{showAdvanced ? 'SHOW LESS' : 'ADVANCED'}}
              </a>
            </div>
            <div class="column is-paddingless">
              <a class="button is-pulled-right has-background-blue" href="javascript://" @click="reload()">RELOAD</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section" v-if="showAdvanced">
      <div class="container">
        <div class="spacing">
          <span class="subtitle">
            Do not let things fool you, click below to proceed to <strong>https://reisraff.github.io</strong>;
          </span>
        </div>

        <div class="spacing">
          <router-link to="/home">sudo go --to https://reisraff.github.io/</router-link>
        </div>
      </div>
    </div>

  </div>
</template>
