<template>
  <nav>
    <v-navigation-drawer v-model="navigation" app temporary>
      <v-layout row class="pa-4">
        <v-row>
          <signOut />
        </v-row>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import signOut from "@/components/Auth/SignOut.vue";

export default {
  name: "NavigationDrawer",
  data() {
    return {};
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
