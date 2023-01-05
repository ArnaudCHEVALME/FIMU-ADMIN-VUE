<template>

    <v-card>
      <v-card-title>
        Création d'une saison
      </v-card-title>
      <v-card-text>
        Sélécionner un pays:
        <select>
          <option v-for="(pays, idSelect) in paysAll" :key="idSelect">
            {{ pays.nompays }}
          </option>
        </select>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('ChangeStateDialog')">
          annulez
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "createSaison",
  computed: {
    ...mapState(['paysAll'])
  }
}
</script>

<style scoped>

</style>