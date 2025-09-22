import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Events from "@/pages/Events.vue";
import Detail from "@/pages/Detail.vue";
import DetailEvents from "@/pages/DetailEvents.vue"; 

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/events", name: "Events", component: Events },
  { path: "/detail-events", name: "DetailEvents", component: DetailEvents },
  { path: "/detail/:id", name: "Detail", component: Detail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
