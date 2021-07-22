<template>
  <div id="hero">
    <HeroMobileBackground class="heroMobile-component"/>
    <div class="hero-container">
      <!--            <img src="../assets/eva-name.png" class="hero-name"> -->
      <div class="header-text triangle">
        <button>Boka här</button>
        <button>Få ett personligt träningsplan</button>
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


  .heroMobile-component {
    display: block;
    @include md {
      display: none;
    }
  }

  .hero-container {

    @include md {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../public/assets/Eva-bilder/eva-screen.png") top no-repeat;
      background-size: cover;
      height: 100vh;
      position: relative;
    }

    .hero-name {
      width: 60%;
      height: auto;
      margin: 5%;
    }


    .header-text {
      background-color:$mainColor;
      @include md {
        background-color:transparent;
        position: absolute;
        top: 0;
        left: 0;
        font-family: $fontFamBread;
        margin: 5%;
        display: flex;
        flex-direction: column;

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
        margin: 15px 0 15px 20px;
        font-family: $fontFamBread;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: bold;
        line-height: 1.6;
        color: #000;
        background-color: white;
        border: none;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;

      }

      button:hover {
        background-color: #bbc7bd;
        box-shadow: 0 15px 20px rgba(187, 199, 189, 0.4);
        color: white;
        transform: scale(1.1);
      }


    }

    .hero-mobileImage {
      align-self: flex-end;
      border: solid 1px black;
      width: 50%;
      height: auto;
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
