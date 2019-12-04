<template>
  <v-container class="notes">
    <v-layout column>
      <v-row class="mb-6">
        <h2 class="mb-2 title">Add note</h2>
        <v-card class="pa-0" flat width="100%">
          <v-form v-model="valid">
            <v-text-field
              class="mb-0"
              label="Title:"
              v-model="newNote.title"
              :rules="validationRules.title"
              outlined
            ></v-text-field>
            <v-textarea v-model="newNote.note" :rules="validationRules.note" outlined></v-textarea>
            <p class="error-message mb-0 mt-4 red--text pa-0" v-if="error">{{ error }}</p>
            <v-btn class="primary" @click="addNote" :disabled="!valid" :loading="loading">Add new</v-btn>
          </v-form>
        </v-card>
      </v-row>
      <v-row>
        <h2 class="mb-2 title">Your notes:</h2>
        <v-card
          v-for="(note, key) in notes"
          :key="key"
          :data-id="note.noteID"
          class="pa-3 mb-4"
          flat
          width="100%"
          outlined
        >
          <v-layout column wrap>
            <v-row class="mx-0 mb-1">
              <div class="notes__title">
                <h3 class="title">{{ note.title }}</h3>
              </div>
              <v-spacer></v-spacer>
              <div class="caption grey--text">
                <v-btn text icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteNote" text icon>
                  <v-icon>delete</v-icon>
                </v-btn>
                <span>{{ note.date }}</span>
              </div>
            </v-row>
            <v-row class="px-3">{{ note.note }}</v-row>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
import format from "date-fns/format";

export default {
  name: "Notes",
  data() {
    return {
      newNote: {
        title: null,
        note: null,
        userID: null,
        date: null
      },
      notes: [],
      error: null,
      loading: false,
      valid: false,
      validationRules: {
        title: [v => !!v || "You have to add a title"],
        note: [v => !!v || "You cannot add a empty note"]
      }
    };
  },
  created() {
    const userID = this.$store.getters.getUserID;

    db.collection("notes")
      .where("userID", "==", userID)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.notes.unshift({
              title: change.doc.data().title,
              note: change.doc.data().note,
              userID: change.doc.data().userID,
              date: change.doc.data().date,
              noteID: change.doc.id
            });
          }
        });
      });
  },
  methods: {
    addNote() {
      this.loading = true;
      this.newNote.userID = this.$store.getters.getUserID;
      this.newNote.date = format(new Date(), "d MMM YYY");

      db.collection("notes")
        .add({
          userID: this.newNote.userID,
          title: this.newNote.title,
          note: this.newNote.note,
          date: this.newNote.date
        })
        .then(() => {
          this.loading = false;
          this.newNote.title = null;
          this.newNote.note = null;
        })
        .catch(err => {
          this.error = err;
        });
    },
    deleteNote(e) {
      const noteContainer = e.target.closest(".v-card");
      const id = noteContainer.dataset.id;

      db.collection("notes")
        .doc(id)
        .delete();

      this.updateNotesAfterRemoveNote(id);
    },
    updateNotesAfterRemoveNote(id) {
      const note = this.notes.find(note => note.noteID === id);
      const index = this.notes.indexOf(note);

      this.notes.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
</style>