<style src="./my-discord.css"></style>
<script type="text/javascript" src="./my-discord.js"></script>
<template>
  <div class="has-background-grey-dark hero is-fullheight site">
    <div class="hero-body is-normal-alignment">
      <div class="container">
          <mainMenu></mainMenu>

          <div class="section has-text-centered">
            <span class="subtitle has-text-white">
              {{ trans[lang].subtitle }}
            </span>

            <div class="container margin-top">
              <div class="discord">
                <div class="discord-title">
                  <span>{{ trans[lang].discordSubtitle }}</span>
                </div>
                <div class="discord-container">

                  <img :src="discord.avatar" class="discord-image" />

                  <div class="discord-content">
                    <span>{{ discord.title }} </span>

                    <br />

                    <span class="dot" /><span> {{ trans[lang].online }} {{ discord.online }}</span>
                  </div>

                  <div class="discord-content align-end">
                    <a class href="https://discord.gg/tezahWc" target="_blank">
                      <div class="discord-button">
                          {{ trans[lang].join }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
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
