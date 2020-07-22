<style src="./byte-off.css"></style>
<script type="text/javascript" src="./byte-off.js"></script>
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
                <div class="network-title">
                  <span>{{ trans[lang].discordSubtitle }}</span>
                  <img style="float: right;" src="../../assets/image/discord.svg" width="32px" />
                </div>
                <div class="network-container">

                  <img :src="discord.avatar" class="network-image" />

                  <div class="network-content">
                    <span>{{ discord.title }} </span>

                    <br />

                    <span class="dot" /><span> {{ trans[lang].online }} {{ discord.online }}</span>
                  </div>

                  <div class="network-content align-end">
                    <a class href="https://discord.gg/tezahWc" target="_blank">
                      <div class="network-button">
                          {{ trans[lang].join }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="margin-top">
              <div class="columns">
                <div class="column is-two-fifths"></div>
                <div class="column has-text-centered">
                  <a class href="https://t.me/joinchat/A95nmRQiZP1GT-LzYTJC4w" target="_blank">
                    <img style="margin: 8px" src="../../assets/image/telegram.png" width="96px" />
                  </a>
                </div>
                <div class="column has-text-centered">
                  <a class href="https://www.youtube.com/channel/UCp1bUD2ttm1sLw84N2d-fKw" target="_blank">
                    <img src="../../assets/image/youtube.svg" width="128px" />
                  </a>
                </div>
                <div class="column is-two-fifths"></div>
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
