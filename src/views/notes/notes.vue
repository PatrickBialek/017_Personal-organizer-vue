<template>
  <v-container class="notes">
    <v-layout column>
      <v-row class="mb-6">
        <h2 class="mb-2 title">Add note</h2>
        <v-card class="pa-0" flat width="100%">
          <v-form v-model="valid">
            <v-textarea v-model="note" outlined :rules="validationRules.note"></v-textarea>
            <p class="error-message mb-0 mt-4 red--text pa-0" v-if="error">{{ error }}</p>
            <v-btn class="primary" @click="addNote" :disabled="!valid" :loading="loading">Add new</v-btn>
          </v-form>
        </v-card>
      </v-row>
      <v-row>
        <h2 class="mb-2 title">Your notes:</h2>
        <v-card class="pa-3" flat width="100%" outlined>
          <v-layout column wrap>
            <v-row class="mx-0 mb-1">
              <div class="notes__title">
                <h3 class="title">Note title</h3>
              </div>
              <v-spacer></v-spacer>
              <div class="caption grey--text">
                <v-btn text icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn text icon>
                  <v-icon>delete</v-icon>
                </v-btn>
                <span>13.10.19</span>
              </div>
            </v-row>
            <v-row
              class="px-3"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus accusantium in rerum, molestias sit tempora perferendis dolor et animi, officia quasi tenetur ea deserunt ut aut inventore laborum tempore. Fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto numquam labore perferendis corrupti iure ipsa ipsum fuga, minima quia odio, laudantium dicta quidem assumenda voluptatem in quam veniam molestiae.</v-row>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Notes",
  data() {
    return {
      note: null,
      error: null,
      loading: false,
      valid: false,
      validationRules: {
        note: [v => !!v || "You cannot add a empty note"]
      }
    };
  },

  computed: {
    /*userNotes() {
      const userID = this.$store.getters.getUserID;

      db.collection("notes")
        .where("userID", "==", userID)
        .onSnapshot(snapshot => {
          snapshot.docChanges.forEach(change => {
            console.log(change);
          });
        });
    }*/
  },
  methods: {
    addNote() {
      this.loading = true;
      const userID = this.$store.getters.getUserID;

      db.collection("notes")
        .add({
          userID: userID,
          note: this.note,
          date: Date.now()
        })
        .then(() => {
          this.loading = false;
          this.note = null;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>