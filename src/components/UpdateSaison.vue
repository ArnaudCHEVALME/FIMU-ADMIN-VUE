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
      <v-img v-if="image != null " :src="getImage()" width="400" height="400"></v-img>
      <div v-else>Pas d'image pour cette Saison</div>
      <DatePicker
          v-model="date"
          :label="'Date de la Saison'"
      ></DatePicker>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('ChangeStateDialog')">
        Annulez
      </v-btn>
      <v-btn @click="updateSaison">
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
      date: new Date(this.saison.dateSaison),
      paysId: this.saison.paysHonneurId,
      theme: this.saison.theme,
      image: this.saison.bannierePath
    }
  },
  props: {
    saison: Object
  },
  methods: {
    async updateSaison(){
      let saison = {
        dateSaison: this.date.toISOString(),
        theme: this.theme.theme,
        bannierePath: this.saison.saisonId
      }
      await axios.put('/api/saisons/'+this.saison.saisonId, saison)
      await this.$store.dispatch('fetchSaisons')
    },
    getImage(){
      return require(`../../public/banniereSaison/${this.image}.png`)
    },
  }
}
</script>

<style scoped>

</style>