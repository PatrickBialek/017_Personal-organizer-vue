<template>
  <v-footer color="primary lighten-1" padless>
    <v-card-text class="white--text">
      <p class="text-center ma-0">
        {{ new Date().getFullYear() }} -
        <strong>{{ appName }}</strong>
      </p>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      appName: "Personal Organizer"
    };
  }
};
</script>