<template>
  <nav>
    <v-navigation-drawer v-model="navigation" app temporary>
      <v-layout column class="pa-4 fill-height">
        <v-row class="px-3">
          <h2>User Name</h2>
        </v-row>
        <v-row class="fill-height">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, key) in items" :key="key">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-spacer></v-spacer>
        <signOut />
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import signOut from "@/components/Auth/SignOut.vue";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      items: [
        { icon: "dashboard", text: "Dashboard", route: "" },
        { icon: "view_list", text: "Notes", route: "" },
        { icon: "watch_later", text: "Time Tracker", route: "" },
        { icon: "account_balance_wallet", text: "Budget", route: "" },
        { icon: "wb_sunny", text: "Weather", route: "" },
        { icon: "trending_up", text: "Exchange Rates", route: "" },
        { icon: "watch_later", text: "Calendar", route: "" }
      ]
    };
  },
  components: {
    signOut
  },
  computed: {
    navigation: {
      get() {
        return this.$store.getters.getNavigationDrawer;
      },
      set(state) {
        if (state !== this.$store.state.getNavigationDrawer) {
          this.$store.dispatch("updateNavigationDrawer");
        }
      }
    }
  }
};
</script>
