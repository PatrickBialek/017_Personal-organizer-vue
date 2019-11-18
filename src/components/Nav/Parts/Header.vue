<template>
  <v-toolbar max-height="60" app>
    <v-btn class="white" depressed v-if="user" @click="drawer = !drawer" background-color="white">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <h1 class="grey--text text--lighten-1 title">Personal Organizer</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <signOut v-if="user"></signOut>
  </v-toolbar>
</template>

<script>
import signOut from "@/components/Auth/SignOut.vue";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.getIsUserOnline;
    }
  },
  components: {
    signOut
  }
};
</script>
