import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Events from "@/pages/Events.vue";
import Detail from "@/pages/Detail.vue";
import DetailEvents from "@/pages/DetailEvents.vue"; 
import CityNetOverview from "@/pages/static/About/CityNetOverview.vue";
import AboutDenpasar from "@/pages/static/About/AboutDenpasar.vue";
import ExecutiveCommittee from "@/pages/static/About/ExecutiveCommittee.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/events", name: "Events", component: Events },
  { path: "/detail-events", name: "DetailEvents", component: DetailEvents },
  { path: "/detail/:id", name: "Detail", component: Detail, props: true },

  // Static Pages
  { path: "/citynet-overview", name: "CityNetOverview", component: CityNetOverview },
  { path: "/about-denpasar", name: "AboutDenpasar", component: AboutDenpasar },
  { path: "/executive-committee", name: "ExecutiveCommittee", component: ExecutiveCommittee },

  {
    path: "/publications",
    name: "PublicationList",
    component: () => import("@/pages/static/Connect/PublicationList.vue")
  },
  {
    path: "/publications/:id",
    name: "PublicationDetail",
    component: () => import("@/pages/static/Connect/PublicationDetail.vue"),
    props: true
  }
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
