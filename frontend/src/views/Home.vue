<template>
<div>
  <section
    id="slider"
    class="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header"
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

  <section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div id="posts" class="post-grid row grid-container gutter-50 clearfix" data-layout="fitRows">

						<div class="entry col-sm-6 col-12">
							<div class="grid-inner">
								<div class="entry-title">
									<h2>{{state.mainTeacher.name}}</h2>
								</div>
								<div class="entry-content">
									<p>{{state.mainTeacher.bio}}</p>
								</div>
							</div> 
						</div>

						<div class="entry col-sm-6 col-12">
							<div class="grid-inner">
								<div class="entry-image">
									<img :src="state.mainTeacher.profilePicture" width="500"  />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>

</div>
</template>

<style scoped lang="css">
@import "../assets/css/swiper.css";
</style>

<script>
import { reactive, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const state = reactive({
      slider: computed(() => store.getters["home/slider"]),
      mainTeacher: computed(() => store.getters["home/mainTeacher"]),
    });

    onBeforeMount(async () => {
      await store.dispatch("home/loadHome");
    });

    return {
      state,
    };
  },
};
</script>
