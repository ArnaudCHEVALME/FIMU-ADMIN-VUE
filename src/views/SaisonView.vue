<template>
  <v-container>
    <v-btn @click="openDialog">
      créer une saison
    </v-btn>
    <card-saison v-for="(saison, id) in saisons" :key="id"
                 :saison="saison">
    </card-saison>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <update-saison :saison="saison_null" @validate="createSaison" @ChangeStateDialog="CreationSaisonDialogChangeState"></update-saison>
    </v-dialog>
  </v-container>
</template>

<script>
import CardSaison from "@/components/CardSaison.vue";
import UpdateSaison from "@/components/UpdateSaison.vue";
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "SaisonPage",
  computed: {
    ...mapState(['saisons']),
  },
  components: {
    UpdateSaison,
    CardSaison
  },
  data() {
    return {
     dialog: false,
      saison_null: {
        paysHonneurId: null,
        dateSaison: null,
        theme: null,
        image: null
      }
    }
  },
  methods: {
    openDialog() {
      this.dialog = !this.dialog
    },
    async createSaison(saison){
      console.log(saison)
      let newSaison = {
        dateSaison: new Date(saison.dateSaison).toISOString(),
        theme: saison.theme,
        paysHonneurId: saison.paysHonneurId,
      }
      console.log(newSaison)
      await axios.post('/api/saisons/', newSaison)
      await this.$store.dispatch('fetchSaisons')
      this.openDialog()
    },
    async updateSaison(){
      let saison = {
        dateSaison: this.dateSaison.toISOString(),
        theme: this.theme.theme,
        bannierePath: null
      }
      await axios.put('/api/saisons/'+this.saison.saisonId, saison)
      await this.$store.dispatch('fetchSaisons')
      this.openDialog()
    },
  }
}
</script>

<style scoped>

</style>