<template>
  <v-app>
    <Header />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Nav,
    Footer
  }
};
</script>
