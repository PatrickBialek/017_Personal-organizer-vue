<template>
  <v-layout column wrap>
    <v-row class="mx-0 mb-1">
      <div class="notes__title">
        <h3 class="title">{{ note.title }}</h3>
      </div>
      <v-spacer></v-spacer>
      <div class="caption grey--text">
        <v-btn @click="editNote" text icon>
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
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "SingleNote",
  data() {
    return {};
  },
  props: {
    note: Object
  },
  methods: {
    deleteNote(e) {
      const noteContainer = e.target.closest(".v-card");
      const id = noteContainer.dataset.id;
      const r = confirm("Are you sure? Note will be removed.");

      if (r === true) {
        db.collection("notes")
          .doc(id)
          .delete()
          .then(() => {
            this.$emit("updateNotesAfterRemoveNote", id);
          });
      }
    },
    editNote(e) {
      console.log(e);
    }
  }
};
</script>