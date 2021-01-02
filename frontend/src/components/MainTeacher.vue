<template>
  <div class="section">
    <div class="container clearfix">
      <div class="heading-block topmargin-sm">
        <h2>প্রধান উস্তাদ</h2>
      </div>
      <div
        id="posts"
        class="post-grid row grid-container gutter-50 clearfix"
        data-layout="fitRows"
      >
        <div class="entry col-sm-6 col-12">
          <div class="grid-inner">
            <div class="entry-title">
              <h2>{{ state.mainTeacher.name }}</h2>
            </div>
            <div class="entry-content">
              <p>{{ state.mainTeacher.bio }}</p>
            </div>
          </div>
        </div>

        <div class="entry col-sm-6 col-12">
          <div class="grid-inner">
            <div class="entry-image">
              <img :src="state.mainTeacher.profilePicture" width="500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const state = reactive({
      mainTeacher: computed(() => store.getters["home/mainTeacher"]),
    });

    return {
      state,
    };
  },
};
</script>

