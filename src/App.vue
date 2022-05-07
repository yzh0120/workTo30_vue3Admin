<template>
  <router-view v-slot="{ Component }">
    <transition name="forward" mode="out-in">
      <!-- Transition包裹的必须是一个单根的组件 -->
      <div :key="$route.path">
        <keep-alive ref="keepAlive">
          <component :is="Component" />
        </keep-alive>
      </div>
    </transition>
  </router-view>
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
  name: "App",

  setup(props) {
    let { proxy } = getCurrentInstance();
    onMounted(() => {
      console.log(proxy.$refs.keepAlive, "proxy.$refs.keepAlive");
    });
  },
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.forward-enter-active {
  animation: slideInRight 0.5s; //slideInRights是animation.css动画
}
.forward-leave-active {
  animation: fadeOutTopLeft 0.5s;
}

.back-enter-active {
  animation: slideInLeft 0.5s; //slideInRights是animation.css动画
}
.back-leave-active {
  animation: fadeOutTopRight 0.5s;
}
</style>