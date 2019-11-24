<template>
  <v-row class="ma-4">
    <v-btn
      class="red darken-2 white--text mb-4"
      @click="continueWithGoogle"
      width="100%"
      :loading="loading"
    >Continue with google</v-btn>
  </v-row>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    continueWithGoogle() {
      this.loading = true;
      const provider = new firebase.auth.GoogleAuthProvider(),
        errors = [];

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.createUserDatabase(res);
          this.loading = false;
          this.$store.commit("updateIsUserOnline", true);
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    },
    createUserDatabase(res) {
      const user = firebase.auth().currentUser,
        email = user.email,
        name = user.displayName;

      const ref = db.collection("users").doc(res.user.uid);
      ref.set({
        name: name
      });
    }
  }
};
</script>