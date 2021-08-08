<template>
  <div class="welcomeBanner">
    <div class="inspo-text">
      <img src="../assets/text-.png">
    </div>
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
  display: none;
  background-color: $mainColor;
  padding: 90px 0;

  @include md {
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .inspo-text {
    img {
      width: 800px;
    }
  }
}

</style>
