<template>
  <v-container class="notes">
    <v-layout column>
      <v-row class="mb-6">
        <h2 class="mb-2 title">Add note</h2>
        <v-card class="pa-0" flat width="100%">
          <v-form v-model="valid" ref="form">
            <v-text-field
              class="mb-0"
              label="Title:"
              v-model="newNote.title"
              :rules="validationRules.title"
              outlined
            ></v-text-field>
            <v-textarea v-model="newNote.note" :rules="validationRules.note" outlined></v-textarea>
            <p class="error-message mt-0 mb-4 red--text pa-0" v-if="error">{{ error }}</p>
            <v-btn class="primary" @click="addNote" :disabled="!valid" :loading="loading">Add new</v-btn>
          </v-form>
        </v-card>
      </v-row>
      <v-row v-if="hasNotes">
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
          <SingleNote
            :note="note"
            @updateNotesAfterRemoveNote="updateNotesAfterRemoveNote"
            @updateAfterEditNote="updateAfterEditNote"
          />
        </v-card>
      </v-row>
      <v-container class="ma-0 pa-0" v-else>
        <NotNotesYet />
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
import format from "date-fns/format";
import SingleNote from "@/components/Notes/SingleNote.vue";
import NotNotesYet from "@/components/Notes/NotNotesYet.vue";

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
      editedNote: null,
      notes: [],
      error: null,
      hasNotes: false,
      loading: false,
      valid: false,
      validationRules: {
        title: [v => !!v || "You have to add a title"],
        note: [v => !!v || "You cannot add a empty note"]
      }
    };
  },
  components: {
    SingleNote,
    NotNotesYet
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

            if (this.hasNotes === false && this.notes.length > 0) {
              this.hasNotes = true;
            }
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
          this.$refs.form.reset();
        })
        .catch(err => {
          this.error = err;
        });
    },
    updateNotesAfterRemoveNote(id) {
      const note = this.notes.find(note => note.noteID === id);
      const index = this.notes.indexOf(note);
      this.notes.splice(index, 1);

      if (this.notes.length == 0) {
        this.hasNotes = false;
      }
    },
    updateAfterEditNote(id) {
      const note = this.notes.find(note => note.noteID === id);
      this.editedNote = note;

      db.collection("notes")
        .doc(id)
        .update({
          title: this.editedNote.title,
          note: this.editedNote.note
        });
    }
  }
};
</script>