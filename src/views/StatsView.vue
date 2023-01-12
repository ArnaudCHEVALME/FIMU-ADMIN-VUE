<template>
  <v-container class="pa-10">
    <div class="d-flex">
      <h1>Stats</h1>
      <v-row>
        <v-col>
    <GraphicComponent
      nameGraph = "Vue des genres"
      :items='genres'
      abs="libelle"
      ord="nbRecherche" 
      colors="#ff0000"
      >
    </GraphicComponent>
    </v-col>
    <v-col>
    <GraphicComponent
      nameGraph = "Vue des artistes"
      :items='artistes'
      abs="name"
      ord="nbRecherche"
      colors="#ff0000"
      >
    </GraphicComponent>
    </v-col>
  </v-row>

    </div>
  </v-container>
</template>

<script>
//import
import GraphicComponent from "@/components/GraphicComponent.vue";
import {mapState} from "vuex";


export default {
  name: "StatsView",

  components: {
    
    GraphicComponent
  },
  computed: {
    ...mapState(["genres", "artistes"]),
  }
}

</script>

<style scoped>

</style>