<template>
  <div class="col-sm-6 col-lg-4">
    <div class="feature-box fbox-sm fbox-plain" data-animate="fadeIn">
      <div class="fbox-icon">
        <a v-if="supportingTeacher.gender == 'Male'" href="#"><i class="icon-line2-user"></i></a>
        <a v-if="supportingTeacher.gender == 'Female'" href="#"><i class="icon-line2-user-female"></i></a>
      </div>
      <div class="fbox-content">
        <h3>{{supportingTeacher.name}}</h3>
        <p>
         {{supportingTeacher.education}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props : {
    supportingTeacher : Object
  }, 
  setup() {
    const state = reactive({
    });
    return {
      state,
    };
  },
};
</script>

<style scoped lang="css">
@import "../assets/css/font-icons.css";
</style>