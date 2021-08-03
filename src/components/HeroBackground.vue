<template>
  <div id="hero">
    <HeroMobileBackground class="heroMobile-component"/>
    <div class="hero-container">
      <!--            <img src="../assets/eva-name.png" class="hero-name"> -->
      <div class="header-text">
        <div class="header-text--intro">
          <p class="header-text--welcome">Välkommen</p>
          <p class="header-text--description"> En av de viktigaste aspekterna av träning är skräddarsydd plan för att nå
            sitt mål. Hos mig får du både
            online coaching likaväl som fysiskt på ett träningscenter. Boka en samtal idag och låt oss ... </p>
        </div>
        <div class="header-text--buttons">
          <button>Boka här</button>
          <button>Få ett personligt träningsplan</button>
        </div>
      </div>
    </div>
    <div class="backgroundImage">
      <!--            <img src= class="hero-mobileImage">-->
    </div>

  </div>
</template>

<script>


import HeroMobileBackground from './HeroMobileBackground.vue';

export default {
  name: 'HeroBackground',

  components: {
    HeroMobileBackground
  }
}
</script>

<style lang="scss" scoped>

@import "../styles/global";

#hero {
  background-color: $mainColor;
  height: 120vh;

  .heroMobile-component {
    display: block;

    @include md {
      display: none;
    }
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 100%;

    @include md {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../../public/assets/Eva-bilder/Eva-rope_lg.jpg") top no-repeat;
      background-size: cover;
      height: 50vh;
      justify-content: space-around;
      align-items: end;
    }

    .hero-name {
      width: 60%;
      height: auto;
      margin: 5%;
    }

    .header-text {

      @include md {
        margin-left: 20px;

      }

      .header-text--intro {
        text-align: left;
        @include md {
          color: white;
          width: 300px;
          padding: 30px;
          height: auto;
        }

        .header-text--welcome {
          text-align: center;
          font-size: 32px;
          text-transform: uppercase;
        }

        .header-text--description {
          width: 250px;
        }

        .hero-mobileImage {
          align-self: flex-end;
          border: solid 1px black;
          width: 50%;
          height: auto;
        }
      }

      .header-text--buttons {
        background-color: $mainColor;
        display: flex;
        height: 50%;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;

        @include md {
          background-color: transparent;
          font-family: $fontFamBread;
          display: flex;
          flex-direction: row;

          p {
            font-size: 1.1rem;
            background-color: transparent;
            word-wrap: break-word;
            width: 100%;
            text-align: left;
          }
        }

        button {
          width: 150px;
          height: auto;
          padding: 5px;
          border-radius: 5px;

          font-family: $fontFamBread;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-weight: bold;
          line-height: 1.6;
          color: #000;
          background-color: $secondaryColor;
          border: none;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease 0s;
          cursor: pointer;
          outline: none;
          @include md {
          }

        }

        button:hover {
          background-color: #bbc7bd;
          box-shadow: 0 15px 20px rgba(187, 199, 189, 0.4);
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .backgroundImage {
    display: none;
    width: auto;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    @include md {
      display: block;
    }
  }
}
</style>
