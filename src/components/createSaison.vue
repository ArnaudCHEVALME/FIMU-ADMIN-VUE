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
        <v-text-field
            append-icon="mdi-close"
            prepend-icon="mdi-phone"
            v-model="theme"
        >
          Entrer un theme
        </v-text-field>
        <v-file-input
            truncate-length="15" v-model="image"
        ></v-file-input>
        <DatePicker v-model="date"></DatePicker>
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
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "createSaison",
  components: {DatePicker},
  computed: {
    ...mapState(['paysAll'])
  },
  data () {
    return {
      date: null, //TODO corriger le pb de date??
      idPays: null,
      theme: null,
      image: null
    }
  }
}
</script>

<style scoped>

</style>