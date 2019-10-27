<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="my-3" min-width="300">
        <v-card-title>
          <h2 class="title grey--text text--darken-2" min-width="300">Sing In</h2>
        </v-card-title>
        <v-form class="pa-4">
          <v-text-field label="Email:" v-model="user.email"></v-text-field>
          <v-text-field label="Passowrd" :type="'password'" v-model="user.password"></v-text-field>
          <v-btn flat class="primary">Sing In</v-btn>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  }
};
</script>