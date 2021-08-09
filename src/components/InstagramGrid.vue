<template>
  <div class="image-grid">
    <div class="insta-name">
      <h1>PTBYEVA</h1>
      <div class="insta-logo">
        <img src="../../public/assets/logos/insta-b.png" alt="instagram logo in black">
      </div>
    </div>
    <div class="row">
      <div class="img img-1"></div>
      <div class="img img-2"></div>
      <div class="img img-3"></div>
      <div class="img img-4"></div>
      <div class="img img-5"></div>
      <div class="img img-6"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InstagramGrid',
}
</script>

<style scoped lang="scss">
@import "../styles/global";


.image-grid {
  background: $mainColor linear-gradient(180deg, rgba(255, 255, 255, 1) 80%, rgba(205, 164, 164, 1) 100%);
  width: 100%;
  @include md {
    background: $mainColor;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .insta-name {
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    h1 {
      margin: 0;
      font-family: $fontFamBread;
      text-transform: uppercase;
    }
    .insta-logo {

    }
  }
  .row {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .img {
    cursor: pointer;
    min-height: 250px;
    min-width: 250px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 10px 14px 20px 0 rgba(226, 204, 189, 1);
  }

  .img-1 {
    background: url('../../public/assets/Eva-bilder/eva-smiling.jpeg') no-repeat center center;
    background-size: cover;

  }

  .img-2 {

    background: url('../../public/assets/Eva-bilder/Eva-mid.jpg') no-repeat center center;
    background-size: cover;

  }

  .img-3 {
    background: url('../../public/assets/Eva-bilder/Eva-midy_sm.jpg') no-repeat center center;
    background-size: cover;

  }

  .img-4 {

    background: url('../../public/assets/Eva-bilder/Eva-mid_sm.jpg') no-repeat center center;
    background-size: cover;

  }

  .img-5 {

    background: url('../../public/assets/Eva-bilder/eva-insta.png') no-repeat center center;
    background-size: cover;
  }

  .img-6 {
    background: url('../../public/assets/Eva-bilder/eva-sportamore.jpeg') no-repeat center center;
    background-size: cover;

  }
}
</style>
