<template>
  <v-container>
    <v-data-table
        :items="categorieLien"
        :headers="[
          {
            text:'Type de Liens',
            align:'start',
            value:'libelle'
          },
          {
            text: 'Actions',
            value: 'actions',
            align: 'end'
          },
        ]"
        sort-by="libelle"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>

  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TypeLiens.vue",
  computed: {
    ...mapState(["categorieLien"]),
  }
}
</script>

<style scoped>

</style>