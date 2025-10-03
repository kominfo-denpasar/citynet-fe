import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Events from "@/pages/Events.vue";
import Detail from "@/pages/Detail.vue";
import EventDetail from "@/pages/DetailEvents.vue"; 
import CityNetOverview from "@/pages/static/About/CityNetOverview.vue";
import AboutDenpasar from "@/pages/static/About/AboutDenpasar.vue";
import ExecutiveCommittee from "@/pages/static/About/ExecutiveCommittee.vue";
import Tourism from "@/pages/static/Explore/Tourism.vue";
// import Test from "@/components/InterestingPoi.vue";
import Test from "@/components/listTourism.vue";
import ThingsToDo from "@/pages/static/Explore/ThingsToDo.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/events", name: "Events", component: Events },
  {
    path: "/events/:id",
    name: "EventDetail",
    component: EventDetail,
    props: true, // biar id otomatis masuk sebagai prop
  },
  // { path: "/detail/:id", name: "Detail", component: Detail, props: true },

  // Static About Pages
  { path: "/citynet-overview", name: "CityNetOverview", component: CityNetOverview },
  { path: "/about-denpasar", name: "AboutDenpasar", component: AboutDenpasar },
  { path: "/executive-committee", name: "ExecutiveCommittee", component: ExecutiveCommittee },

  // Explore Pages
  { path: "/tourism", name: "Tourism", component: Tourism },
  { path: "/things-to-do", name: "ThingsToDo", component: ThingsToDo },

  // list Connect Pages
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
  },
  { path: "/test", name: "Test", component: Test },
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
