<template>
    <div class="parallaxBottom">


        <div class="parallaxBottom-wrapper">
        </div>
    </div>
</template>
<script>

    export default {
        name: 'ParallaxBottom',
    }

</script>

<style scoped lang="scss">
    @import "../styles/global";

    .parallaxBottom {
        position: relative;

        h1 {
            color: white;
            font-family: $fontFamMain;
            text-transform: uppercase;
            margin: 50% 0 10% 0;

        }

        .parallaxBottom-wrapper {
            width: 100%;
            height: 100vh;
            padding-top: 20vh;
            box-sizing: border-box;
            transform-style: preserve-3d;
            @include md {
                width: 50vw;
                height: 50vh;
            }
            //background:  no-repeat fixed center;
            //background-size: contain;

            &.parallaxBottom-wrapper {
                content: "";
                width: 100%;
                bottom: 0;
                left: 0;
                background: url('../../public/assets/Eva-bilder/Eva-midy_sm.jpg'),url('../../public/assets/Eva-bilder/Eva-mid_mobile.jpg') no-repeat fixed center;
                background-size: contain;
                position: absolute;
                z-index: -1;
                transform: translateZ(-1px) scale(1.6);

                @include md {
                    background: url('../../public/assets/Eva-bilder/Eva-midy_lg.jpg'),url('../../public/assets/Eva-bilder/Eva-mid_md.jpg') no-repeat fixed center;
                    background-size: contain;
                }
            }
        }
    }
</style>
