<template>
  <div id="home">
    <HomeHero/>
    <WelcomeBanner/>
    <WorkoutOffers/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>

import HomeHero from '../components/HomeHero'
import Carousel from "../components/Carousel";
import WelcomeBanner from "../components/WelcomeBanner";
import WorkoutOffers from "../components/WorkoutOffers";
import Footer from "../components/Footer";


export default {
  name: 'Home',
  components: {
    HomeHero,
    Carousel,
    WelcomeBanner,
    WorkoutOffers,
    Footer
  }
}
</script>

<style lang="scss" scoped>

@import "../styles/global";

#home {
  height: 100%;
  width: 100%;
}

</style>

