<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
        </button>
    </div>
</template>
<script>

    import {mapMutations} from "vuex";
    import store from "../../store/modules/content";

    export default {
        name: 'Bar',
        computed: {
            isBurgerActive() {
                return store.state.isOpen;
            }
        },
        methods: {
            toggle() {
                store.mutations.toggle();
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../styles/global";


    button {
        cursor: pointer;
    }

    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        height: 30px;
        width: 42px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: $textColor;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 3px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-10x);
        transform: translateY(-10px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(10px);
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>
