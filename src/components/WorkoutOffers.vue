<template>
  <div id="workoutOffers">
    <h2>Mina tjänster</h2>
    <div v-scrollanimation class="workoutOffers-container">
      <div class="workoutOffers-columns">
        <div class="offer-box1 col">
          <img src="../../public/assets/logos/bar.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h3>träningsplan</h3>
          <p class="content">Styrka och mobilitet, fokus teknik</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box2 col">
          <img src="../../public/assets/logos/Deal.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h3>personlig</h3>
          <p class="content">Tillsammans följer jag dig i din utveckling</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box3 col">
          <img src="../../public/assets/logos/Peeps.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h3>gruppträning</h3>
          <p class="content">Ta med en kompis eller kollegorna</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box4 col">
          <img src="../../public/assets/logos/KBthick.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h3>hemmaträning</h3>
          <p class="content">Enkla anpassade övningar i hemmet</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutOffers'
}
</script>

<style scoped lang="scss">
@import "../styles/global";


#workoutOffers {
  width: 100vw;
  background: $mainColor;

  @include md {
    background: $mainColor;

  }

  h2 {
   margin-bottom: 50px;
  }

  h2, h3 {
    font-family: $fontFamMain;
    text-transform: uppercase;
    padding: 20px 0 0;
  }

  h2:before,
  h2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 15%;

    @include md {
      width: 30%;
    }
  }

  h2:before {
    right: 0.2em;
    margin-left: -50%;
  }

  h2:after {
    left: 0.2em;
    margin-right: -50%;
  }

  .workoutOffers-container {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    padding: 60px 20px;

    h2 {
      text-transform: uppercase;
      margin-bottom: 0;
    }

    .workoutOffers-columns {
      width: 200px;
      height: 100%;

      .workoutOffers-text-wrap {
        text-align: center;
      }
    }

    .offer-box2, .offer-box4 {
      height: 200px;
      width: 200px;

      img {
        height: 80px;
        align-self: center;
      }
    }

    .offer-box1, .offer-box3 {
      img {
        width: auto;
        height: 50px;
        align-self: center;

      }
    }


    .col {
      display: flex;
      justify-content: space-around;
      height: 200px;
      border: $borderColor solid 2px;
      border-radius: 50%;
      width: 200px;
      background-color: $secondaryColor;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

    }
  }

  @include sm {
    .before-enter {
      @include slideBeforeV();
    }

    .enter {
      @include slideEnterV();
    }
  }

  @include md {
    .before-enter {
      @include slideBeforeH();
    }

    .enter {
      @include slideEnterH();
    }

  }
}


</style>
