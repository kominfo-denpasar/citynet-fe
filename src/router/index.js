import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import List from "@/pages/List.vue";
import Detail from "@/pages/Detail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: List },
  { path: "/detail/:id", component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // kalau ada savedPosition (misalnya tombol back/forward), ikuti itu
    if (savedPosition) {
      return savedPosition
    } else {
      // default: reset ke atas
      return { top: 0 }
    }
  }
});

export default router;