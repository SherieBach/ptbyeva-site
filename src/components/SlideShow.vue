<template>
    <div :class="slideShow">
        <div class="slide">
        //    <img src="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'SlideShow',
    data() {
        return {
            images: [
                    {image: require("../../public/assets/Eva-bilder/Eva-mid.jpg")},
                    {image: require("../../public/assets/Eva-bilder/Eva-mid_md.jpg")},
                    {image: require("../../public/assets/Eva-bilder/Eva-coral_lg.jpg")},
                ],
            index: 0,
            time: 5000,
        }
    },
    computed: {

    },
    methods: {
            initateSlideShow() {

            }
    },
}
</script>
<style lang="scss" scoped>

</style>