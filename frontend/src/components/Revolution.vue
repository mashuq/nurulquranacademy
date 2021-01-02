<template>
  <section
    id="slider"
    class="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header"
  >
    <div class="slider-inner">
      <div class="swiper-container swiper-parent">
        <div class="swiper-wrapper">
          <div class="swiper-slide dark">
            <div class="container">
              <div class="slider-caption slider-caption-center">
                <h2 data-animate="fadeInUp">{{state.slider.headline}}</h2>
                <p
                  class="d-none d-sm-block"
                  data-animate="fadeInUp"
                  data-delay="200"
                >
                  {{state.slider.siteDescription}}
                </p>
              </div>
            </div>
            <div
              class="swiper-slide-bg"
              :style="'background-image: url('+state.slider.topBackgroundImage+');'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const state = reactive({
      slider: computed(() => store.getters["home/slider"]),
    });

    return {
      state,
    };
  },
};
</script>

<style scoped lang="css">
@import "../assets/css/swiper.css";
</style>
