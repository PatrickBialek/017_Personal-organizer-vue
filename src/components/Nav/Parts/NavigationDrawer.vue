<template>
  <nav>
    <v-navigation-drawer app temporary v-model="drawer">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import signOut from "@/components/Auth/SignOut.vue";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      drawer: false
    };
  },
  components: {
    signOut
  }
};
</script>
