<template>
  <div class="navigation">
    <div id="topNav" :class="{ 'nav--hidden': !showNavbar }">
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
    <nav>
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
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    document.addEventListener('wheel', (evt) => {
      store.mutations.setIsClosed();
      this.onScroll();
    }, {capture: false, passive: true});
  },
  /*  destroyed() {

    },*/
  beforeDestroy() {
    document.removeEventListener('wheel', () => {
      this.isOpen = false
      this.onScroll();
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
    onScroll() {
      console.log('scrolling')
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return
      }
      //this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/global";

.navigation {
  font-family: $fontFamMain;
  background-color: transparent;
  text-transform: uppercase;
  color: $textColor;

  nav {
    display: none !important;
    @include md {
      display: flex !important;
      justify-content: space-between;
    }

    .instaName {
      display: flex;
      align-items: center;
      padding-left: 10px;

      .instaLogo-name {
        font-size: 2em;
        font-weight: 600;
        margin: 5px;
        cursor: pointer;


      }

    }

    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      background-color: transparent;


      li, a {
        padding: 10px;
        text-decoration: none;
        font-weight: bolder;
        color: $textColor;
      }
    }
  }

  #topNav {
      background-color: transparent;
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
