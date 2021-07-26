<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>

    import store from "../../store/modules/content";

    export default {
        name: 'SideBar',
        computed: {
            isPanelOpen() {
                return store.state.isOpen; // returns the state to store
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../styles/global";

    .slide-enter-active {
        transition: transform 0.5s ease;
    }

    .slide-leave-active {
        transition: opacity .3s;

    }

    .slide-enter {
        transform: translateY(-100%);
        transition: 180ms ease-in;
    }

    .slide-leave-to {
        opacity: 0;
    }

    .sidebar-backdrop {
        background-color: rgb(33, 29, 24);
        width: auto;
        height: 100vh;
        top: 0;
        right: 0;

    }

    .sidebar-panel {
        background-color: $secondaryColor;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 99;
        width: 100%;
    }
</style>
