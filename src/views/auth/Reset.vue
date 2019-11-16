<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="ma-3" min-width="300">
        <v-card-title>
          <h2 class="title grey--text text--darken-2">Resset Password</h2>
        </v-card-title>
        <v-form class="pa-4" v-model="valid" ref="form">
          <v-text-field
            class="mb-4"
            label="Email: "
            v-model="user.email"
            :rules="validationRules.email"
          ></v-text-field>
          <v-btn
            class="primary"
            @click="resetPassword"
            :disabled="!valid"
            :loading="loading"
          >Send reset mail</v-btn>
        </v-form>
        <p class="error-message red--text mx-4" v-if="error">{{ error }}.</p>
        <p class="success-message green--text mx-4" v-if="success">{{ success }}.</p>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Reset",
  data() {
    return {
      user: {
        email: ""
      },
      loading: false,
      valid: false,
      error: "",
      success: "",
      validationRules: {
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ]
      }
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;

      console.log(this.user.email);

      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          this.success = "Reset email has been send";
          this.loading = false;
          this.resetForm();
        })
        .catch(err => {
          this.resetForm();
          this.loading = false;
          this.error = err;
        });
    },
    resetForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.error-message,
.success-message {
  max-width: 250px;
}
</style>
