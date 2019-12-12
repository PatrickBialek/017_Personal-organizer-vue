<template>
  <v-layout column wrap>
    <v-card outlined>
      <v-row>
        <v-col>Name, Group</v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn class="error">Stop</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "CurrentTrackers",
  data() {
    return {};
  }
};
</script>