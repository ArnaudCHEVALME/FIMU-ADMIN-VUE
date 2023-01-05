<template>
  <v-container class="pa-10">
    <div class="d-flex">
      <h1>Stats</h1>

      <GraphicComponent
        :items='[{ "_id": 5, "nom": "broigne", "type": "armor", "prix": 200, "effet": "A+20" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" }, { "_id": 1, "nom": "conic helmet", "type": "helmet", "prix": 200, "effet": "A+10" }, { "_id": 1, "nom": "conic helmet", "type": "helmet", "prix": 200, "effet": "A+10" }, { "_id": 11, "nom": "dagger", "type": "weapon", "prix": 100, "effet": "S+5" }, { "_id": 6, "nom": "hauberk", "type": "armor", "prix": 500, "effet": "A+40" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" }, { "_id": 6, "nom": "hauberk", "type": "armor", "prix": 500, "effet": "A+40" }, { "_id": 15, "nom": "long sword", "type": "weapon", "prix": 300, "effet": "S+20" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" }]'
        abs="nom" ord="prix" colors="#ff0000">
      </GraphicComponent>


    </div>
  </v-container>
</template>

<script>
//import
import GraphicComponent from "@/components/GraphicComponent.vue";

export default {
  name: "StatsView",

  components: {
    GraphicComponent
  },
}

</script>

<style scoped>

</style>