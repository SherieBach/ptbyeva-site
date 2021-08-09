<template>
  <div id="home">
    <HeroBackground/>
    <WelcomeBanner/>
    <WorkoutOffers/>
    <About/>
    <InstagramGrid/>
  </div>
</template>

<script>

import About from "@/components/About";
import WorkoutOffers from "../components/WorkoutOffers";
import InstagramGrid from "@/components/InstagramGrid";
import WelcomeBanner from "@/components/WelcomeBanner";
import HeroBackground from "@/components/HeroBackground";


export default {
  name: 'Home',
  components: {
    HeroBackground,
    WelcomeBanner,
    InstagramGrid,
    About,
    WorkoutOffers,
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

