<template>
  <div id="nav" :data="transition">
    <router-link to="/a">Page A</router-link> |
    <router-link to="/b">Page B</router-link> |
    <router-link to="/c">Page C</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition :name="transition">
      <component class="child-view" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { watch, defineComponent, ref } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  setup() {
    let lastRouteIndex = 0;
    const route = useRoute();
    const transition = ref("right-slide-in");

    watch(
      () => route.meta.index,
      (index: number) => {
        if (index >= lastRouteIndex) {
          transition.value = "right-slide-in";
        } else {
          transition.value = "left-slide-in";
        }
        lastRouteIndex = index;
      },
      { flush: "pre" }
    );

    return {
      transition: transition,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home {
  background: #fff;
}

.child-view {
  width: 100%;
  position: absolute;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}

.right-slide-in-enter-from {
  opacity: 0;
  transform: translate(20%, 0);
}
.right-slide-in-leave-active {
  opacity: 0;
}

.left-slide-in-enter-from {
  opacity: 0;
  transform: translate(-20%, 0);
}
.left-slide-in-leave-active {
  opacity: 0;
}
</style>
