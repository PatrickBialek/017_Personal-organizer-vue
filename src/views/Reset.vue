<template>
  <v-container fill-height grid-list-md>
    <v-layout row wrap align-center class="justify-center">
      <v-card class="ma-3" min-width="300">
        <v-card-title>
          <h2 class="title grey--text text--darken-2">Resset Password</h2>
        </v-card-title>
        <v-form class="pa-4">
          <v-text-field label="Email: " v-model="email"></v-text-field>
          <v-btn class="primary">Send reset mail</v-btn>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>