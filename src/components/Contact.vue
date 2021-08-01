<template>
    <div id="contact">
        <div class="contact-container">
            <h3>Kontakta mig</h3>
            <span>
                <a href="mailto:someone@yoursite.com">EVA SJÖHOLM</a> <!--todo: skriva in Evas mail-->
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Contact'
    }
</script>

<style scoped lang="scss">
    @import "../styles/global";

    #contact {
        background-color: $secondaryColor;
        width: 100%;
        //height: 100%;
        font-family: $fontFamMain;
        text-transform: uppercase;


        .contact-container {
            font-family: $fontFamMain;


            h3 {
              margin: auto;
                color: $textColor;
            }

            a {
                color: $textColor;
                text-decoration: none;
                font-size: 1.6em;
            }
        }
    }

</style>
