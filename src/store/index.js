import Vue from "vue";
import Vuex from "vuex";

import * as mutations from "./modules/mutations";
import * as actions from "./modules/actions";
import * as getters from "./modules/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isUserOnline: false,
      name: ""
    },
    layout: {
      navigationDrawer: false
    }
  },
  mutations,
  actions,
  getters
});