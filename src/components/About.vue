<template>
  <div class="about">
    <h2>Vem är Eva</h2>
    <div class="about-profile">
      <div class="about-profile--image">
        <img src="../../public/assets/Eva-bilder/eva-profile.png">
      </div>
      <div class="about-profile--description">
        <span> <i>"Min passion är att resa och min kärlek är träning, mina egenskaper som människa är mitt stora hjärta, mångkulturella bakgrund, ett bra öra och driv för att lära ut vad jag älskar inom fitness och träning.

<br/>Vikten i livet är att omfamna varje ögonblick och uppskatta idag. Vem som helst kan börja göra en förändring, jag är ett exempel på det. Genom god energi, realistiska mål och bra planering är allt möjligt. Och mitt mål är att hjälpa någon att tro på det och nå det."</i></span>
        <h3>Eva Sjöholm </h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',

}
</script>


<style lang="scss" scoped>

@import "../styles/global";

.about {
  background-color: $mainColor;
  padding: 40px 20px 70px 20px;

  @include md {
    background-color: $mainColor;
    height: 85vh;
  }

  h2 {
    color: $textColor;
    font-family: $fontFamMain;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;

  }

  h2:before,
  h2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
  }

  h2:before {
    right: 0.5em;
    margin-left: -50%;
  }

  h2:after {
    left: 0.5em;
    margin-right: -50%;
  }

  .about-profile {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding:30px;

    .about-profile--image {
      img {
        width: 350px;
        height: 100%;
      }
    }

    .about-profile--description {
      width: 350px;
      height: 100%;
      text-align: left;
      margin-top: 20px;

      @include md{
        margin-top: 0;
      }
    }
  }
}

</style>

