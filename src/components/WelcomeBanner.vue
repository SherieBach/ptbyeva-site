<template>
    <div class="welcomeBanner">
        <h1></h1>
        <span></span>
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
        //margin-bottom: 30%;
        @include md {
           // margin-bottom: 25%;

        }

        h1 {
            color: $textColor;
            font-family: $fontFamMain;
            padding-bottom: 20px;
            text-transform: uppercase;
        }

        span {
            padding-bottom: 20px;
        }
    }

</style>
