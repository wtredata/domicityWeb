import Vue from "vue";
import VueRouter from "vue-router";

import Index1 from "./pages/index1.vue";
import Index2 from "./pages/index2.vue";
import Index3 from "./pages/index3.vue";
import Index4 from "./pages/index4.vue";
import Index5 from "./pages/index5.vue";
import Index6 from "./pages/index6.vue";
import Index7 from "./pages/index7.vue";
import Index8 from "./pages/index8.vue";
import Index9 from "./pages/index9.vue";
import Login from "./pages/login.vue";
import Signup from "./pages/signup.vue";
import Forgotpassword from './pages/password-forgot.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index-1",
    component: Index1
  },
  {
    path: "/index-1",
    component: Index1
  },
  {
    path: "/index-2",
    name: "Index-2",
    component: Index2
  },
  {
    path: "/index-3",
    name: "Index-3",
    component: Index3
  },
  {
    path: "/index-4",
    name: "Index-4",
    component: Index4
  },
  {
    path: "/index-5",
    name: "Index-5",
    component: Index5
  },
  {
    path: "/index-6",
    name: "Index-6",
    component: Index6
  },
  {
    path: "/index-7",
    name: "Index-7",
    component: Index7
  },
  {
    path: "/index-8",
    name: "Index-8",
    component: Index8
  },
  {
    path: "/index-9",
    name: "Index-9",
    component: Index9
  },
  {
    path: "/login",
    name: "Login page",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup page",
    component: Signup
  },
  {
    path: '/password_forgot',
    name: 'Forgot Password page',
    component: Forgotpassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
