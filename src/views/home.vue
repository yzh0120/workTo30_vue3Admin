<template>
  首页
  <div @click="demo">{{ one }}个vue3</div>
  <div>year:{{ year }}{{ propsDemo }}</div>
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
        console.log("demo");
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
      console.log("挂载");
      setTimeout(() => {
        data.one = "改变";
      }, 1000);
    });

    return {
      ...toRefs(data),
      ...methods,
    };
  },
};
</script>

<style  lang="scss" scoped>
</style>