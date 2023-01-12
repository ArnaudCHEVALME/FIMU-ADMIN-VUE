<template>
    <v-card>
      <v-card-title>
        Création d'une saison
      </v-card-title>
      <v-card-text>
        <v-select v-model="paysId"
                  :items="pays"
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
        <v-btn @click="$emit('validate', saison_mod)">
          Valider
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
    ...mapState(['pays'])
  },
  props: {
    saison: Object
  },
  data () {
    return {
      saison_mod: {
        date: this.saison.dateSaison, //TODO corriger le pb de date??
        paysId: this.saison.paysHonneurId,
        theme: this.saison.theme,
        image: null
      }
    }
  }
}
</script>

<style scoped>

</style>