<template>
<div id="heroMobile">
    <div class="heroMobile-container">
            <img src="../assets/eva-nameLight.png" class="heroMobile-name">
    </div>
</div>
</template>

<script>

export default {
        name: 'HeroMobileBackground',
    }
</script>

<style lang="scss" scoped>

    @import "../styles/global";

    #heroMobile {
            position: relative;
            background-image: url('../../public/assets/Eva-bilder/Eva-rope_.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            width: 100%;
            height: 50vh;
            display: block;

            @include md {
                display:none;
            }
        .heroMobile-container {

        }
        .heroMobile-name {
            position: absolute;
            width:50%;
            height: auto;
            margin: 15px 0 15px 0;
            left:5%;
            top:50%;

            @include md{
                top:5%;
                width:250px;
                }
        }
    }
</style>
