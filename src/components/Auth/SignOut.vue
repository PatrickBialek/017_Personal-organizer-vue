<template>
  <div>
    <v-btn @click="signOut" class="grey--text" text small>Sign Out</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignOut",
  data() {
    return {};
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/sign-in");
          this.$store.commit("updateIsUserOnline", false);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>