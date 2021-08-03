<template>
  <div class="welcomeBanner">
    <h1>what i do</h1>
  </div>
</template>

<script>

export default {
  name: 'WelcomeBanner',
}

</script>

<style lang="scss" scoped>

@import "../styles/global";

.welcomeBanner {
  background-color: $mainColor;
  padding: 40px 20px 70px 20px;

  @include md {


  }
    h1 {
    color: $textColor;
    font-family: $fontFamMain;
      overflow: hidden;
      text-align: center;
      text-transform: uppercase;

    }

    h1:before,
    h1:after {
      background-color: #000;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
    }

    h1:before {
      right: 0.5em;
      margin-left: -50%;
    }

    h1:after {
      left: 0.5em;
      margin-right: -50%;
    }
}

</style>
