import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Home.vue"),
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
