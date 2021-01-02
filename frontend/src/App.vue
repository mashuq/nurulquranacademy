<template>
  <div id="wrapper" class="clearfix">
    <header id="header" class="full-header dark">
      <div id="header-wrap">
        <div class="container">
          <div class="header-row">
            <div id="logo">
              <a
                href="/"
                class="standard-logo"
                data-dark-logo="images/logo-dark.png"
                ><img :src="state.logo" alt="নুরুল কুরআন একাডেমি"
              /></a>
              <a
                href="/"
                class="retina-logo"
                data-dark-logo="images/logo-dark@2x.png"
                ><img src="images/logo@2x.png" alt="নুরুল কুরআন একাডেমি"
              /></a>
            </div>
            <!-- #logo end -->

            <div id="primary-menu-trigger">
              <svg class="svg-trigger" viewBox="0 0 100 100">
                <path
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                ></path>
                <path d="m 30,50 h 40"></path>
                <path
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                ></path>
              </svg>
            </div>

            <nav class="primary-menu">
              <ul class="menu-container">
                <li class="menu-item">
                  <router-link to="/" class="menu-link">Home</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/courses" class="menu-link"
                    >Courses</router-link
                  >
                </li>
              </ul>
            </nav>

            <form class="top-search-form" action="search.html" method="get">
              <input
                type="text"
                name="q"
                class="form-control"
                value=""
                placeholder="Type &amp; Hit Enter.."
                autocomplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="header-wrap-clone"></div>
    </header>

    <router-view />

    <footer id="footer" class="dark">
      <div class="container">
        <div class="footer-widgets-wrap">
          <div class="row col-mb-50">
            <div class="col-lg-4">
              <div class="widget clearfix">
                <img
                  :src="state.logo" 
                  alt="Image"
                  class="footer-logo"
                />
                <div class="widget clearfix" v-html="state.footer.column1">
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="widget clearfix" v-html="state.footer.column2"></div>
            </div>
            <div class="col-lg-4">
              <div class="widget clearfix"  v-html="state.footer.column3"></div>
            </div>
            <a :href="state.footer.facebook" class="social-icon si-small si-rounded topmargin-sm si-facebook">
									<i class="icon-facebook"></i>
									<i class="icon-facebook"></i>
						</a>
            <a :href="state.footer.youtube" class="social-icon si-small si-rounded topmargin-sm si-youtube">
									<i class="icon-youtube"></i>
									<i class="icon-youtube"></i>
						</a>
          </div>
        </div>
      </div>

      <div id="copyrights">
        <div class="container">
          <div class="w-100 text-center">           
            Copyrights &copy; 2021 All Rights Reserved by Nurul Quran Academy.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="css">
@import "./assets/css/bootstrap.css";
@import "./assets/style.css";
@import "./assets/css/dark.css";
</style>


<script>
import { reactive, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const state = reactive({
      logo: computed(() => store.getters["site/logo"]),
      footer: computed(() => store.getters["site/footer"]),
    });

    onBeforeMount(async () => {
      await store.dispatch("site/loadSite");
    });

    return {
      state,
    };
  },
};
</script>

