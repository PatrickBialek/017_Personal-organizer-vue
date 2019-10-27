<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="ma-3" min-width="300">
        <v-row class="ma-4">
          <v-btn class="red darken-2 white--text mb-4" width="100%">Continue with google</v-btn>
        </v-row>
        <v-row class="mx-4 mt-4 justify-center align-center">
          <v-divider></v-divider>
          <span class="mx-4">OR</span>
          <v-divider></v-divider>
        </v-row>
        <v-card-title>
          <h2 class="title text--grey text--darken-2">Sing Up</h2>
        </v-card-title>
        <v-form class="pa-4">
          <v-text-field label="Email:" v-model="user.email"></v-text-field>
          <v-text-field label="Name" v-model="user.name"></v-text-field>
          <v-text-field label="Password" :type="'password'" v-model="user.password"></v-text-field>
          <v-text-field label="Repeat Password" :type="'password'" v-model="user.passwordRepeated"></v-text-field>
          <v-btn flat class="primary">Sign Up</v-btn>
        </v-form>
        <v-row class="mx-4 mb-4">
          <router-link class="link" to="/sign-in">I have and account.</router-link>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
        passwordRepeated: ""
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