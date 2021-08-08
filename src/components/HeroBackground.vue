<template>
  <div id="hero">
    <HeroMobileBackground class="heroMobile-component"/>
    <div class="hero-container">
      <!--            <img src="../assets/eva-name.png" class="hero-name"> -->
      <div class="header-text">
        <div class="header-text--intro">
          <p class="header-text--welcome">Träninga för alla!</p>
          <p class="header-text--description"> En av de viktigaste aspekterna av träning är skräddarsydd plan för att nå
            sitt mål. Hos mig får du både
            online coaching likaväl som fysiskt på ett träningscenter. Boka en samtal idag och låt oss hitta ditt bästa jag idag!</p>
        </div>
        <div class="header-text--buttons">
          <button>Ta reda på mer</button>
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
  height: 110vh;

  @include md {
    height: 100%;
  }

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
    height: auto;

    @include md {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../../public/assets/Eva-bilder/eva-sprint.jpeg") top no-repeat;
      background-size: cover;
      height: 100vh;
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
          font-size: 28px;
          text-transform: uppercase;
          word-break: break-all;
        }

        .header-text--description {
          width: 250px;
          margin:auto;
          @include md {
            margin: 0;
            width: auto;
          }
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
          align-items: start;

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
          padding: 10px;
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
          margin: 20px 0 0;
          @include md {
          }

        }

        button:hover {
          background-color: #f6e8eb;
          box-shadow: 0 15px 20px rgba(187, 199, 189, 0.4);
          color: $textColor;
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
