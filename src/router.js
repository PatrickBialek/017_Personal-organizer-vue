import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

// Views
import Home from "./views/dashboard/Home.vue";
import SignIn from "./views/auth/SignIn.vue";
import SignUp from "./views/auth/SignUp.vue";
import Reset from "./views/auth/Reset.vue";
import Error404 from "./views/errors/Error404.vue";
import Notes from "./views/notes/notes.vue";
import Tracker from "./views/tracker/tracker.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
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
    },
    {
      path: "/notes",
      name: "Notes",
      component: Notes,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: "/tracker",
      name: "Tracker",
      component: Tracker,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;

    if (user) {
      next();
    } else {
      next({
        name: "SignIn"
      });
    }
  } else {
    next();
  }
});

export default router;