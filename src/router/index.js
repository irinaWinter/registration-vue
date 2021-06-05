import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Register";
import RegisterSuccess from "@/views/RegisterSuccess";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: Register,
  },
  {
    path: "/registerSuccess",
    name: "registerSuccess",
    component: RegisterSuccess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
