import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignIn from "./views/auth/SignIn.vue";
import SignUp from "./views/auth/SignUp.vue";
import Reset from "./views/auth/Reset.vue";
import Error404 from "./views/errors/Error404.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/reset-passowrd",
      name: "Reset",
      component: Reset
    },
    {
      path: "*",
      name: "404",
      component: Error404
    }
  ]
});

export default router;