<template>
  <v-container>
    <v-layout column>
      <v-row class="mb-6">
        <h2 class="title mb-2">Start track:</h2>
        <v-card class="pa-3" flat width="100%" outlined>
          <v-form v-model="valid" ref="form">
            <v-layout class="px-3" row align-center>
              <v-flex xs-12>
                <v-text-field class="mr-4" label="Title"></v-text-field>
              </v-flex>
              <v-flex xs-12>
                <v-text-field label="Group"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-btn class="primary">Start</v-btn>
            </v-layout>
          </v-form>
        </v-card>
      </v-row>
    </v-layout>
    <CurrentTrackers />
  </v-container>
</template>

<script>
import CurrentTrackers from "@/components/tracker/CurrentTrackers.vue";

export default {
  name: "Tracker",
  data() {
    return {
      valid: false
    };
  },
  components: {
    CurrentTrackers
  }
};
</script>

<style scoped lang="scss">
</style>