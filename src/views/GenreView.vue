<template>
  <v-container>
    <v-data-table v-if="genres.lenght != 0" :items="genres" :headers="[
      { text: 'nom de genre', value: 'libelle' },
      {text: 'actions', value:'actions', align:'end'}
    ]">

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      
    </v-data-table>

    <v-data-table v-if="genres.lenght != 0" :items="sousGenres" :headers="[
      { text: 'nom de sousGenre', value: 'libelle' },
      { text: 'Genre', value: 'genreLibelle' },
      {text: 'actions', value:'actions', align:'end'}
    ]">

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      
    </v-data-table>

    
  </v-container>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: "MapView.vue",
  computed: {
    ...mapState(["genres", "sousGenres"]),
  }
}
</script>

<style scoped>

</style>