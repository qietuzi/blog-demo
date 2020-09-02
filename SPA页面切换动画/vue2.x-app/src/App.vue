<template>
  <div id="app">
    <div id="nav" :data="transition">
      <router-link to="/a">Page A</router-link> |
      <router-link to="/b">Page B</router-link> |
      <router-link to="/c">Page C</router-link>
    </div>
    <transition :name="transition">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      transition: '',
      lastRouteIndex:0
    }
  },
  watch:{
    $route(val){
      if (val.meta.index >= this.lastRouteIndex) {
        this.transition = "right-slide-in";
      } else {
        this.transition = "left-slide-in";
      }
      this.lastRouteIndex = val.meta.index;
    }
  }
};
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
  transition: all .8s cubic-bezier(0.55, 0, 0.1, 1);
}

.right-slide-in-enter {
  opacity: 0;
  transform: translate(20%, 0);
}
.right-slide-in-leave-active {
  opacity: 0;
}

.left-slide-in-enter {
  opacity: 0;
  transform: translate(-20%, 0);
}
.left-slide-in-leave-active {
  opacity: 0;
}
/* right-slide-in-leave-active right-slide-in-leave-to */
</style>
