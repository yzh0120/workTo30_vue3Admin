<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="forward" mode="out-in">
      <div :key="$route.path">
        <keep-alive ref="keepAliveContainer">
          <component :is="Component" />
        </keep-alive>
      </div>
    </transition>
  </router-view> -->
  <router-view></router-view>
</template>

<script>
import {
  onMounted,
  computed,
  watch,
  getCurrentInstance,
  reactive,
  toRefs,
  ref,
} from "vue";
export default {
  name: "App",

  setup(props) {
    let { proxy } = getCurrentInstance();
    const keepAliveContainer = ref(null); // 通过 ref 绑定子组件
    onMounted(() => {
      // console.log(keepAliveContainer.value._.__v_cache, "缓存");
    });
    return {
      keepAliveContainer,
    };
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