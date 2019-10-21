import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "./views/Home.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Error404 from "./views/Error404.vue";
import Notes from "./views/Notes/index.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: "/notes",
      name: "Notes",
      component: Notes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      name: "404",
      component: Error404
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;

    if (user) {
      next();
    } else {
      next({
        name: SignIn
      })
    }
  } else {
    next();
  }
})

export default router;