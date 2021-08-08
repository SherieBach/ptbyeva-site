<template>
  <div class="navigation" >
    <div id="topNav">
      <div class="instaName">
        <span class="instaLogo-name">ptbyeva</span>
      </div>
      <div class="bar-menu">
        <Bar/>
      </div>
      <Sidebar class="sideBar-component">
        <ul class="sidebar-links">
          <router-link to="/">
            <li v-scrollanimation @click="closeSidebar">
              Om mig
            </li>
          </router-link>
          <router-link to="/#workoutOffers">
            <li v-scrollanimation @click="closeSidebar">
              Mina tjänster
            </li>
          </router-link>
          <router-link to="/#contact">
            <li v-scrollanimation @click="closeSidebar">
              Kontakt
            </li>
          </router-link>
          <li v-scrollanimation @click="closeSidebar">
            <a href="https://www.instagram.com/ptbyeva/?hl=sv"></a>
            Instagram
          </li>
        </ul>
      </Sidebar>
    </div>
    <nav class="nav">
      <div class="instaName">
        <span class="instaLogo-name">ptbyeva</span>
      </div>
      <ul>
        <li>
          <router-link to="/">Om mig</router-link>
        </li>
        <li>
          <router-link to="/#workoutOffers">mina tjänster</router-link>
        </li>
        <li>
          <router-link to="/#contact">kontakt</router-link>
        </li>
        <li>
          <router-link to="/#contact">Instagram</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Sidebar from "./mobile-menu/Sidebar";
import Bar from "./mobile-menu/Bar";
import {mapMutations} from 'vuex';
import store from "../store/modules/content";


export default {
  name: 'NavBar',
  components: {
    Sidebar,
    Bar
  },
  data() {
    return {
      isOpen: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', () => {
      store.mutations.setIsClosed()
    })
  },
  destroyed() {
    window.removeEventListener('scroll', () => {
      this.isOpen = false
    });
  },
  methods: {
    ...mapMutations([
      'setIsClosed',
      'toggle'
    ]),
    closeSidebar() {
      store.mutations.setIsClosed();
    },
  }
};
</script>

<style scoped lang="scss">
@import "../styles/global";

.navigation {
  font-family: $fontFamMain;
  background-color: $secondaryColor;
  text-transform: uppercase;
  color: $textColor;
  width: 100%;


  .nav {
    display: none !important;
    @include md {
      display: flex !important;
      justify-content: space-between;
      width: 100%;
      .instaName {
        color: black;

        .instaLogo-name {
          color: black;
        }

      }
    }

    .instaName {
      display: flex;
      align-items: center;
      padding-left: 10px;

      .instaLogo-name {
        font-size: 2em;
        align-self: start;
        margin: 5px;
        cursor: pointer;

      }

    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      width: 500px;
      margin: 0;
      align-items: center;
     // background-color: transparent;


      li, a {
        padding: 10px;
        text-decoration: none;
        font-weight: bolder;
        color: $textColor;
      }
    }

  }

  #topNav {
    background-color: $secondaryColor;
    @include md {
      display: none !important;
    }
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    text-transform: uppercase;
    height: 60px;

    .instaName {
      display: flex;
      align-items: center;
      padding-left: 10px;

      .instaLogo-name {
        font-size: 2em;
        font-weight: 600;
        margin: 5px;
        cursor: pointer;
        color: $textColor;
      }

    }

    .bar-menu {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.8rem;
      z-index: 999;
      margin-left: auto;

      @include md {
        display: none;
      }
    }

    .sideBar-component {

      .sidebar-links, a {
        width: 100%;
        list-style-type: none;
        text-decoration: none;
        letter-spacing: 0.15em;
        color: $textColor;
        padding-left: 0;
        margin-top: 8%;


        li {
          font-size: 1.5em;
          padding: 15px 0 15px 40px;
        }

        .before-enter {
          opacity: 0;
          transform: translateY(10px);
          transition: all .6s ease-out;
        }

        .enter {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
}

</style>
