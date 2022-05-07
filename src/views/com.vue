<template>
  <div></div>
</template>

<script>
import {
  onMounted,
  computed,
  watch,
  getCurrentInstance,
  reactive,
  toRefs,
} from "vue";
export default {
  setup() {
    let data = reactive({
      demo: 1,
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>