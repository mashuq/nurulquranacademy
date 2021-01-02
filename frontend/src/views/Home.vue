<template>
<div>
  <Revolution></Revolution>
    <section id="content">
  <MainTeacher></MainTeacher>
  <SupportingTeachers></SupportingTeachers>
  <Testimonials></Testimonials>
    </section>
</div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import Revolution from '../components/Revolution'
import MainTeacher from '../components/MainTeacher'
import SupportingTeachers from '../components/SupportingTeachers'
import Testimonials from '../components/Testimonials'

export default {
  components : {
    Revolution,
    MainTeacher,
    SupportingTeachers,
    Testimonials
  }, 
  setup() {
    const store = useStore();

    const state = reactive({
      
    });

    onMounted(async () => {
      await store.dispatch("home/loadHome");
    });

    return {
      state,
    };
  },
};
</script>
