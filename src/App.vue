<template>
  <div id="app">
    <NavBar/>
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

  }
}
</script>
<style lang="scss">
@import "styles/global";

html {

  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  line-height: 1.6;
}

body {
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
  width: auto;
  perspective: 3px;
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: auto;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

