<template>
  <v-container>
      <card-saison v-for="(saison, id) in saisons" :key="id"
                   :saison="saison">
      </card-saison>
  </v-container>
</template>

<script>
import CardSaison from "@/components/CardSaison.vue";
import {mapState} from "vuex";
export default {
  name: "SaisonPage",
  computed: {
    ...mapState(['saisons']),
  },
  components: {
    CardSaison
  }
}
</script>

<style scoped>

</style>