<template>
<div id="footer">
    <Contact />
</div>
</template>
<script>
    import Contact from "./Contact";
    export default {
        name: 'Footer',
        components: {
            Contact
        }
    }

</script>
<style scoped lang="scss">
#footer {
    //height: 20vh;
    width: 100%;
    display: flex;
    background-color: aqua;
}
</style>
