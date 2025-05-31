import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Memo from "../pages/Memo.vue";
import Quis from "../pages/Search.vue";

const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: import("../pages/about.vue"),
    },
    {
      path: "/memo",
      name: "memo",
      component: Memo,
    },
    {
      path: "/quis",
      name: "quis",
      component: Quis,
    },
  ],
});

export default route;
