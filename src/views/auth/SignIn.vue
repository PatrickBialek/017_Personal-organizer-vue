<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="my-3" min-width="300">
        <continueWithGoogle />
        <v-row class="mx-4 mt-4 justify-center align-center">
          <v-divider></v-divider>
          <span class="mx-4">OR</span>
          <v-divider></v-divider>
        </v-row>
        <v-card-title>
          <h2 class="title text--grey text--darken-2" min-width="300">Sing In</h2>
        </v-card-title>
        <v-form class="pa-4" v-model="valid" ref="form">
          <v-text-field label="Email:" v-model="user.email" :rules="validationRules.email"></v-text-field>
          <v-text-field
            class="mb-4"
            label="Passowrd"
            :type="'password'"
            v-model="user.password"
            :rules="validationRules.password"
          ></v-text-field>
          <v-btn
            class="primary"
            @click="signInHanlder"
            :disabled="!valid"
            :loading="loading"
          >Sign In</v-btn>
          <p class="error-message mb-0 mt-4 red--text" v-if="error">{{ error }}</p>
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
import db from "@/firebase/init";
import firebase from "firebase";
import continueWithGoogle from "@/components/Auth/ContinueWithGoogle.vue";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: "",
      loading: false,
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
  },
  components: {
    continueWithGoogle
  },
  methods: {
    signInHanlder() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          this.loading = false;
        })
        .then(user => {
          this.reset();
          this.$store.commit("updateIsUserOnline", true);
          this.$router.push("/");
        })
        .catch(err => {
          this.loading = false;
          this.error = err.message;
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
}
.error-message {
  max-width: 250px;
}
</style>
