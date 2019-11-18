<template>
  <nav>
    <NavigationDrawer />
    <Header />
  </nav>
</template>

<script>
import Header from "./Parts/Header";
import NavigationDrawer from "./Parts/NavigationDrawer";

export default {
  name: "Nav",
  data() {
    return {};
  },
  components: {
    Header,
    NavigationDrawer
  }
};
</script>
