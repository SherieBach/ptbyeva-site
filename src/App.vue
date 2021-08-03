<template>
  <div id="app">
    <NavBar id="nav" :class="{ 'nav-hidden': !showNavbar }"/>
    <Home/>
  </div>
</template>
<script>
import Home from "./views/Home";
import NavBar from '../src/components/Navbar';

export default {
  components: {
    Home,
    NavBar,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  beforeMount() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', () => {
      this.onScroll()
    })
  },
  destroyed() {
    window.removeEventListener('scroll', () => {

    });
  },
  methods: {

    onScroll() {
      console.log(window.pageYOffset)
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 0) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
};
</script>
<style lang="scss">
@import "styles/global";

html {
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  line-height: 1.6;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
  height: 100%;
  width: 100%;
}

#nav {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 1;

  &.nav-hidden {
    transform: translate3d(0, -100%, 0);
  }
}
</style>

