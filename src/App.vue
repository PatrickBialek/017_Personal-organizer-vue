<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>
