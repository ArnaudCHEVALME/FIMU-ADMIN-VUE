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
      <create-saison @ChangeStateDialog="CreationSaisonDialogChangeState"></create-saison>
    </v-dialog>
  </v-container>
</template>

<script>
import CardSaison from "@/components/CardSaison.vue";
import CreateSaison from "@/components/CreateSaison.vue";
import {mapState} from "vuex";
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
     dialog: false
    }
  },
  methods: {
    CreationSaisonDialogChangeState() {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style scoped>

</style>