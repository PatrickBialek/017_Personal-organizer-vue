<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="my-3" min-width="300">
        <v-row class="ma-4">
          <v-btn class="red darken-2 white--text mb-4" width="100%">Continue with google</v-btn>
        </v-row>
        <v-row class="mx-4 mt-4 justify-center align-center">
          <v-divider></v-divider>
          <span class="mx-4">OR</span>
          <v-divider></v-divider>
        </v-row>
        <v-card-title>
          <h2 class="title text--grey text--darken-2" min-width="300">Sing In</h2>
        </v-card-title>
        <v-form class="pa-4" v-model="valid" :lazy-validation="lazy">
          <v-text-field label="Email:" v-model="user.email" :rules="validationRules.email"></v-text-field>
          <v-text-field
            class="mb-4"
            label="Passowrd"
            :type="'password'"
            v-model="user.password"
            :rules="validationRules.password"
          ></v-text-field>
          <v-btn class="primary" :disabled="!valid">Sign In</v-btn>
        </v-form>
        <v-row class="mx-4 mb-1">
          <router-link class="link" to="/sign-up">I don't have an account yet.</router-link>
        </v-row>
        <v-row class="mx-4 mb-4">
          <router-link class="link" to="/reset-passowrd">I don't remember my password.</router-link>
        </v-row>
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
      },
      valid: false,
      validationRules: {
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: [
          v => !!v || "Password is required",
          v =>
            (v && v.length >= 8) ||
            "Password must contains at least 8 characters"
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
}
</style>
