import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Edit from "../views/Edit";
import Questionary from "../views/Questionary";
import Result from "../views/Result";
import Ranking from "../views/Ranking";

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
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
