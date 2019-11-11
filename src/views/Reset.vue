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
            @click="resetPasswordHandler"
            :disabled="!valid"
            :loading="loading"
          >Send reset mail</v-btn>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Reset",
  data() {
    return {
      user: {
        email: ""
      },
      loading: false,
      valid: false,
      validationRules: {
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ]
      }
    };
  },
  methods: {
    resetPasswordHandler() {
      this.reset();
      this.loading = true;
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
