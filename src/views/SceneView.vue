<template>
  <v-container>
    <v-data-table v-if="scenes.lenght != 0" :items="scenes" :headers="[
      { text: 'Nom', value: 'nom' },
      { text: 'Latitude', value: 'latitude' },
      { text: 'Longitude', value: 'longitude' },
      { text: 'Interieur', value: 'interieur' },
      { text: 'Capacite', value: 'capacite' },
      { text: 'Lié a un concert', value: 'concertId' },
      {text: 'Actions', value:'actions', align:'end'}
    ]">

      <template v-slot:[`item.interieur`]="{ item }">
        <v-icon v-if="item != null">
          mdi-check
        </v-icon>
        <v-icon v-else>
          mdi-close
        </v-icon>
      </template>

      <template v-slot:[`item.concertId`]="{ item2 }">
        <v-icon v-if="item2 != null">mdi-check</v-icon>
        <v-icon v-else>mdi-close</v-icon>
      </template>

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
  name: "SceneView.vue",
  computed: {
    ...mapState(["scenes"]),
  }
}
</script>

<style scoped>

</style>