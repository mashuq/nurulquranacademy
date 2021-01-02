<template>
  <div class="section dark">
    <div class="container clearfix">
      <div class="heading-block center">
        <h2>সহকারী উস্তায/উস্তাযাগণ</h2>
      </div>

      <div class="row col-mb-50">
        <supportingTeacher
          v-for="supportingTeacher in state.supportingTeachers"
          :supportingTeacher="supportingTeacher"
          :key="supportingTeacher.id"
        ></supportingTeacher>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import supportingTeacher from "./SupportingTeacher";

export default {
  components: {
    supportingTeacher,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      supportingTeachers: computed(
        () => store.getters["home/supportingTeachers"]
      ),
    });

    return {
      state,
    };
  },
};
</script>

