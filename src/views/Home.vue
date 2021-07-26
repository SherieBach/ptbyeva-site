<template>
    <div id="home">
        <HomeHero/>
        <WelcomeBanner/>
        <WorkoutOffers/>
<!--        <Carousel/>-->
        <Contact/>
    </div>
</template>

<script>

    import HomeHero from '../components/HomeHero'
/*
    import Carousel from "../components/Carousel";
*/
    import WelcomeBanner from "../components/WelcomeBanner";
    import WorkoutOffers from "../components/WorkoutOffers";
    import Contact from "../components/Contact";
    import Footer from "../components/Footer";


    export default {
        name: 'Home',
        components: {
            HomeHero,
           /* Carousel,*/
            WelcomeBanner,
            WorkoutOffers,
            Contact,
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

