<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavBar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import NavBar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
