import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/a"
  },
  {
    name: "a",
    path: "/a",
    meta: { index: 0 },
    component: () => import(/* webpackChunkName: "A" */ "../views/A.vue")
  },
  {
    path: "/b",
    name: "b",
    meta: { index: 1 },
    component: () => import(/* webpackChunkName: "B" */ "../views/B.vue")
  },
  {
    path: "/c",
    name: "c",
    meta: { index: 2 },
    component: () => import(/* webpackChunkName: "C" */ "../views/C.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
