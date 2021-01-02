<template>
  <div class="section">
    <div class="container clearfix">
      <div class="heading-block center">
        <h3>শিক্ষার্থীদের মন্তব্য</h3>
      </div>

      <ul class="testimonials-grid grid-1 grid-md-2 grid-lg-3">
        <Testimonial
          v-for="testimonial in state.testimonials"
          :testimonial="testimonial"
          :key="testimonial.id"
        ></Testimonial>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import Testimonial from "./Testimonial";

export default {
  components: {
    Testimonial,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      testimonials: computed(() => store.getters["home/testimonials"]),
    });

    return {
      state,
    };
  },
};
</script>

