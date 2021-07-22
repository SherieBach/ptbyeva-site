<template>
    <div class="carousel">
        <!--<div class="carousel-container">
            <div class="img-container">
                <img src='../../public/assets/Eva-bilder/Eva-mid.jpg'>
            </div>
            <div class="img-container">
                <img src='../../public/assets/Eva-bilder/Eva-rope_.jpg'>
            </div>
            <div class="img-container">
                <img src='../../public/assets/Eva-bilder/Eva-midy_lg.jpg'>
            </div>
        </div>-->
        <h1>hitta mig på instagram</h1>
        <div class="carousel-container_2">
            <transition-group name="fade" tag="div">
                <div v-for="i in [currentIndex]" :key="i">
                    <img :src="currentImg" alt="images of a posing personal trainer"/>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                images: [
                    {image: require("../../public/assets/Eva-bilder/Eva-mid.jpg")},
                    {image: require("../../public/assets/Eva-bilder/Eva-mid_md.jpg")},
                    {image: require("../../public/assets/Eva-bilder/Eva-coral_lg.jpg")},
                ],
                timer: null,
                currentIndex: 0
            }
        },
        mounted() {
            this.startSlide();
        },

        methods: {
            startSlide() {
                this.timer = setInterval(this.next, 4500);
            },

            next() {
                this.currentIndex += 1;
            },
        },
        computed: {
            currentImg() {
                const image = this.images[Math.abs(this.currentIndex) % this.images.length].image;
                console.log(image);
                return image;

            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/global";


    .carousel {
        position: relative;
        padding-bottom: 80px;
        margin:25px 0 25px 0;
        height: 40vh;
        z-index: 999;
        display: block;
        font-family: $fontFamMain;
        text-transform: uppercase;
        @include md {
           // display: none;
        }

        .carousel-container {
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

    }
</style>
