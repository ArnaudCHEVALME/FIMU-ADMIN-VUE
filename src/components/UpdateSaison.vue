<template>
  <v-card>
    <v-card-title>
      Création d'une saison
    </v-card-title>
    <v-card-text>
      <v-select v-model="newSaison.paysHonneurId"
                :items="paysAll"
                item-text="nompays"
                item-value="paysId"
                label="Pays à l'honneur"
                prepend-icon="mdi-earth"
      >
      </v-select>
      <v-text-field
          prepend-icon="mdi-palette"
          v-model="newSaison.theme"
          label="Thème de la Saison"
      >
      </v-text-field>
      <v-file-input
          truncate-length="15"
          v-model="image"
          label="Image de la Saison"
      ></v-file-input>
      <v-img v-if="newSaison.bannierePath != null " :src="getImage()" width="400" height="400"></v-img>
      <div v-else>Pas d'image pour cette Saison</div>
      <DatePicker
          v-model="newSaison.dateSaison"
          :label="'Date de la Saison'"
      ></DatePicker>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('ChangeStateDialog')">
        Annulez
      </v-btn>
      <v-btn>
        Mettre a jour
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
      newSaison: this.saison,
      date: null,
      paysId: null,
      theme: null,
      image: null
    }
  },
  props: {
    saison: Object
  },
  methods: {
    async updateSaison(){
      let saison = {
        dateSaison: this.newSaison.dateSaison.toISOString(),
        theme: this.newSaison.theme,
        bannierePath: this.newSaison
      }
      console.log(saison)
      await axios.post('/api/saisons/'+this.newSaison.saisonId, saison)
      await this.$store.dispatch('fetchSaisons')
    },
    getImage(){
      return require(`../../public/banniereSaison/${this.newSaison.bannierePath}.png`)
    },
  }
}
</script>

<style scoped>

</style>