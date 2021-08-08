<template>
  <div class="image-grid">
    <h1>hitta mig på instagram</h1>
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

  h1 {
    margin-top: 0;
    font-family: $fontFamBread;
    text-transform: uppercase ;
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

  /*.carousel-container {
      // position: absolute;
      // bottom: -100px;
      // left: 9%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .img-container {
          margin-right: 60px;

          img {
              width: auto;
              height: 250px;

          }

      }
  }
}

.carousel-container_2 {
  height: 30vh;


  .fade-enter-active,
  .fade-leave-active {
      transition: all 0.9s ease;
      overflow: hidden;
      visibility: visible;
      position: absolute;
      width: 100%;
      opacity: 1;
  }

  .fade-enter,
  .fade-leave-to {
      visibility: hidden;
      width: 100%;
      opacity: 0;
  }

  img {
      height: 400px;
      padding: 10px;
  }
*/
}
</style>
