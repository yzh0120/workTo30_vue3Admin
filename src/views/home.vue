<template>
  首页
  <div @click="demo">{{ one }}个vue3 获取缓存</div>
  <div>year:{{ year }}{{ propsDemo }}</div>
  <com ref="com"></com>

  <div @click="go(`aa`)">a</div>
  <div @click="go(`bb`)">b</div>
  <router-view v-slot="{ Component }">
    <transition name="forward" mode="out-in">
      <!-- Transition包裹的必须是一个单根的组件 -->
      <div>
        <keep-alive :max="100" ref="keepAliveContainer">
          <component :is="Component" :key="$route.path" />
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
  ref,
} from "vue";
import com from "./com.vue";
export default {
  props: {
    propsDemo: {
      type: String,
      default: "ddd",
    },
  },
  setup(props) {
    //   setup的执行时组件对象还没有创建，此时不能使用this来访问data/computed/methods/props
    //   我们可以通过 getCurrentInstance这个函数来返回当前组件的实例对象，也就是当前vue这个实例对象
    let { proxy } = getCurrentInstance();
    const keepAliveContainer = ref(null); // 通过 ref 绑定子组件
    let data = reactive({
      one: "第一",
      age: 20,
      // 计算属性 getter setter
      year: computed({
        get: () => {
          return 2020 - data.age;
        },
        set: (val) => {
          data.age = 2020 - val;
        },
      }),
    });
    let methods = {
      demo() {
        let cache = keepAliveContainer.value._.__v_cache;

        if (cache.get("/aa")) {
          // cache.get("/aa").component.destroyed(); //(cache.get("/aa").component.vnode)  .props.onVnodeUnmounted
          cache.delete("/aa");
          console.log("存在");
        }

        console.log(cache.get("/aa"), "缓存"); //

        //
      },
    };
    //监听
    watch(
      data,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      {
        immediate: true,
        deep: true,
      }
    );
    console.log("props:", props);
    console.log("proxy:", proxy);
    onMounted(() => {
      console.log("com:", proxy.$refs.com);
      setTimeout(() => {
        data.one = "改变";
      }, 1000);
    });

    return {
      ...toRefs(data),
      keepAliveContainer,
      ...methods,
    };
  },
  components: {
    com,
  },
  methods: {
    // demo() {
    //   console.log(this.$refs.keepAliveContainer, "keepAliveContainer");
    // },
    go(val) {
      this.$router.push({
        path: `/${val}`,
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
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