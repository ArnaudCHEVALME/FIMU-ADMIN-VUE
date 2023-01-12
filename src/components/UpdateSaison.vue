<template>
  <v-card>
    <v-card-title>
      Création d'une saison
    </v-card-title>
    <v-card-text>
      <v-select v-model="saison_modif.paysHonneurId"
                :items="pays"
                item-text="nompays"
                item-value="paysId"
                label="Pays à l'honneur"
                prepend-icon="mdi-earth"
      >
      </v-select>
      <v-text-field
          prepend-icon="mdi-palette"
          v-model="saison_modif.theme"
          label="Thème de la Saison"
      >
      </v-text-field>
      <v-file-input
          truncate-length="15"
          label="Image de la Saison"
      ></v-file-input>
      <v-img v-if="image != null " :src="getImage()" width="400" height="400"></v-img>
      <div v-else>Pas d'image pour cette Saison</div>
      <DatePicker
          v-model="saison_modif.dateSaison"
          :label="'Date de la Saison'"
      ></DatePicker>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('ChangeStateDialog')">
        Annulez
      </v-btn>
      <v-btn @click="$emit('validate', saison_modif)">
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
      saison_modif: this.saison
    }
  },

  methods: {
    getImage(){
      return require(`../../public/banniereSaison/${this.image}.png`)
    },
  }
}
</script>

<style scoped>

</style>