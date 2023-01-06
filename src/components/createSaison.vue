<template>
    <v-card>
      <v-card-title>
        Création d'une saison
      </v-card-title>
      <v-card-text>
        <v-select v-model="paysId"
                  :items="paysAll"
                  item-text="nompays"
                  item-value="paysId"
                  label="Pays à l'honneur"
                  prepend-icon="mdi-earth"
        >
        </v-select>
        <v-text-field
            prepend-icon="mdi-palette"
            v-model="theme"
            label="Thème de la Saison"
        >
        </v-text-field>
        <v-file-input
            truncate-length="15"
            v-model="image"
            label="Image de la Saison"
        ></v-file-input>
        <DatePicker
            v-model="date"
            :label="'Date de la Saison'"
        ></DatePicker>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('ChangeStateDialog')">
          Annulez
        </v-btn>
        <v-btn @click="createSaison">
          Créer
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import {mapState} from "vuex";
import DatePicker from "@/components/DatePicker.vue";
import axios from "axios";
export default {
  name: "createSaison",
  components: {DatePicker},
  computed: {
    ...mapState(['paysAll'])
  },
  data () {
    return {
      date: null, //TODO corriger le pb de date??
      paysId: null,
      theme: null,
      image: null
    }
  },
  methods: {
    async createSaison(){
      let saison = {
        dateSaison: this.date.toISOString(),
        theme: this.theme,
        paysHonneurId: this.paysId,
      }
      console.log(saison)
      await axios.post('/api/saisons/', saison)
      await this.$store.dispatch('fetchSaisons')
    }
  }
}
</script>

<style scoped>

</style>