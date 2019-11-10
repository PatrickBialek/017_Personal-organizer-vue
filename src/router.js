import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Reset from "./views/Reset.vue";
import Error404 from "./views/Error404.vue";
import Notes from "./views/Notes/index.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
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
      path: "/notes",
      name: "Notes",
      component: Notes
    },
    {
      path: "*",
      name: "404",
      component: Error404
    }
  ]
});

export default router;
