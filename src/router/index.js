import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const user = localStorage.getItem("user") || null;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/registration",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/ProfileView.vue"),
      //if there is user data in local storage, the private page is available
      redirect: user ? "" : "/login",
    },
  ],
});

export default router;
