<style src="./home.css"></style>
<script type="text/javascript" src="./home.js"></script>
<template>
  <div class="has-background-grey-dark hero is-fullheight site">
    <div class="hero-body is-normal-alignment">
      <div class="container">
          <mainMenu></mainMenu>

          <div class="section cover">
            <div class="userpic"></div>
          </div>

          <div class="section has-text-centered">
            <span class="subtitle has-text-white">
              {{ trans[lang].subtitle }}
            </span>

            <div class="container">
              <a href="https://www.hackthebox.eu/profile/79586" target="_blank">
                <div class="badge" id="badge"></div>
              </a>
            </div>
          </div>

          <div>
            <div class="columns">
                <div class="column has-text-centered">
                  <a href="https://br.linkedin.com/in/reisraff" target="_blank"><img alt="linkedin" class="svg" src="../../assets/image/linkedin.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="mailto:reisraff@gmail.com"><img alt="email" class="svg" src="../../assets/image/email.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="tel:+5511984416276"><img alt="whatsapp" class="svg" src="../../assets/image/whatsapp.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="https://twitter.com/reisraff" target="_blank"><img alt="twitter" class="svg" src="../../assets/image/twitter.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="https://discordapp.com/users/@reisraff#2191" target="_blank"><img style="height: 56.6934px" alt="twitter" class="svg" src="../../assets/image/discord.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="https://github.com/reisraff" target="_blank"><img alt="github" class="svg" src="../../assets/image/github.svg"></a>
                </div>
                <div class="column has-text-centered">
                  <a href="https://medium.com/@reisraff" target="_blank"><img alt="medium" class="svg" src="../../assets/image/medium.svg"></a>
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
