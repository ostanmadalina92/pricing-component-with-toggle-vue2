import Vue from "vue";
import VueRouter from "vue-router";
import MonthlyPlan from "../views/MonthlyPlan.vue";
import AnnuallyPlan from "../views/AnnuallyPlan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "annually",
    component: AnnuallyPlan,
  },
  {
    path: "/monthly",
    name: "monthly",
    component: MonthlyPlan,
  },
  {
    path: "/annually",
    name: "annually",
    component: AnnuallyPlan,
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
