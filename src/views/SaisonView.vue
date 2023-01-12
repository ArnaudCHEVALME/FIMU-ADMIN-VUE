<template>
  <v-container>
    <v-btn @click="CreationSaisonDialogChangeState">
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
      <create-saison :saison="saison_null" @validate="createSaison" @ChangeStateDialog="CreationSaisonDialogChangeState"></create-saison>
    </v-dialog>
  </v-container>
</template>

<script>
import CardSaison from "@/components/CardSaison.vue";
import CreateSaison from "@/components/createSaison.vue";
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "SaisonPage",
  computed: {
    ...mapState(['saisons']),
  },
  components: {
    CreateSaison,
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
    CreationSaisonDialogChangeState() {
      this.dialog = !this.dialog
    },
    async createSaison(saison){
      let newSaison = {
        dateSaison: this.saison.date.toISOString(),
        theme: this.saison.theme,
        paysHonneurId: this.saison.paysId,
      }
      console.log(saison)
      await axios.post('/api/saisons/', newSaison)
      await this.$store.dispatch('fetchSaisons')
      this.CreationSaisonDialogChangeState()
    }
  }
}
</script>

<style scoped>

</style>