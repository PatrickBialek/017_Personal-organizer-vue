<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="ma-3" min-width="300">
        <continueWithGoogle />
        <v-row class="mx-4 mt-4 justify-center align-center">
          <v-divider></v-divider>
          <span class="mx-4">OR</span>
          <v-divider></v-divider>
        </v-row>
        <v-card-title>
          <h2 class="title text--grey text--darken-2">Sing Up</h2>
        </v-card-title>
        <v-form class="pa-4" v-model="valid" ref="form">
          <v-text-field label="Email:" v-model="user.email" :rules="validationRules.email" required></v-text-field>
          <v-text-field label="Name" v-model="user.name" :rules="validationRules.name" required></v-text-field>
          <v-text-field
            label="Password"
            :type="'password'"
            v-model="user.password"
            :rules="validationRules.password"
            required
          ></v-text-field>
          <v-text-field
            class="mb-4"
            label="Repeat Password"
            :type="'password'"
            v-model="user.passwordRepeated"
            :rules="validationRules.passwordRepeated"
            required
          ></v-text-field>
          <v-btn
            class="primary"
            @click="signInHandler"
            :disabled="!valid"
            :loading="loading"
          >Sign Up</v-btn>
          <p class="error-message mb-0 mt-4 red--text" v-if="error">{{ error }}</p>
        </v-form>
        <v-row class="mx-4 mb-4">
          <router-link class="link" to="/sign-in">I have an account.</router-link>
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
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
        passwordRepeated: ""
      },
      error: "",
      valid: false,
      loading: false,
      validationRules: {
        name: [v => !!v || "Name is required"],
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: [
          v => !!v || "Password is required",
          v =>
            (v && v.length >= 8) ||
            "Password must contains at least 8 characters",
          v =>
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) ||
            "One letter, one number, one special sign"
        ],
        passwordRepeated: [
          v => !!v || "You have to repeat a password",
          v =>
            (v && v.length >= 8) ||
            "Password must contains at least 8 characters",
          v =>
            (v && v == this.user.password) || "Passwords have to be this same",
          v =>
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) ||
            "One small letter, one number, one big letter"
        ]
      }
    };
  },
  components: {
    continueWithGoogle
  },
  methods: {
    signInHandler() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(res => {
          const id = res.user.uid,
            ref = db.collection("users").doc(id);

          this.$store.commit("updateUserID", id);
          ref.set({
            name: this.user.name,
            id: id
          });
        })
        .then(() => {
          this.loading = false;
          this.$refs.form.reset();
          this.error = "";
          this.$store.commit("updateIsUserOnline", true);
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
          this.$refs.form.reset();
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
