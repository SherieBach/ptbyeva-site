<template>
  <div id="workoutOffers">
    <h1>Personlig träning i ditt hem eller i träningslokalen.</h1>
    <div v-scrollanimation class="workoutOffers-container">
      <div class="workoutOffers-columns">
        <div class="offer-box1 col">
          <img src="../../public/assets/logos/bar.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h2>träningsplan</h2>
          <p class="content">Styrka och mobilitet, fokus teknik</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box2 col">
          <img src="../../public/assets/logos/Deal.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h2>en & en</h2>
          <p class="content">Tillsammans följer jag dig i din utveckling</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box3 col">
          <img src="../../public/assets/logos/Peeps.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h2>gruppträning</h2>
          <p class="content">Ta med en kompis eller kollegorna</p>
        </div>
      </div>
      <div class="workoutOffers-columns">
        <div class="offer-box4 col">
          <img src="../../public/assets/logos/KBthick.svg">
        </div>
        <div class="workoutOffers-text-wrap">
          <h2>hemmaträning</h2>
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
  background: $mainColor linear-gradient(180deg, rgba(255, 255, 255, 1) 80%, rgba(205,164,164,1) 100%);


  h1 {
    font-family: $fontFamMain;
    text-transform: uppercase;
    padding: 20px;
    margin: auto;
  }

  .workoutOffers-container {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    padding: 25px;

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
