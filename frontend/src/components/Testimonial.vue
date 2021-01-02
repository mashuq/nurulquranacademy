<template>
  <li class="grid-item">
    <div class="testimonial">
      <div class="testi-image">
         <a v-if="testimonial.gender == 'Male'" href="#"><i class="icon-line2-user"></i></a>
         <a v-if="testimonial.gender == 'Female'" href="#"><i class="icon-line2-user-female"></i></a>
      </div>
      <div class="testi-content">
        <p>{{ testimonial.testimonial }}</p>
        <div class="testi-meta">
          {{ testimonial.name }}
          <span>{{ testimonial.course }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    testimonial: Object,
  },
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>

<style scoped lang="css">
@import "../assets/css/font-icons.css";
</style>