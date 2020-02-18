import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Edit from "../views/Edit.vue";
import Questionary from "../views/Questionary.vue";

import VueKonva from "vue-konva";

Vue.use(VueKonva);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit
  },
  {
    path: "/questionary",
    name: "Questionary",
    component: Questionary
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
