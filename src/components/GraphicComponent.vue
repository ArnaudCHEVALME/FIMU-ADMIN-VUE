<!-- Exemple utilisation:  

<GraphicComponent
      :nameGraph = "GRAPHIQUE TEST"
      :items='[ { "_id": 5, "nom": "broigne", "type": "armor", "prix": 200, "effet": "A+20" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" }, { "_id": 1, "nom": "conic helmet", "type": "helmet", "prix": 200, "effet": "A+10" }, { "_id": 1, "nom": "conic helmet", "type": "helmet", "prix": 200, "effet": "A+10" }, { "_id": 11, "nom": "dagger", "type": "weapon", "prix": 100, "effet": "S+5" }, { "_id": 6, "nom": "hauberk", "type": "armor", "prix": 500, "effet": "A+40" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" }, { "_id": 6, "nom": "hauberk", "type": "armor", "prix": 500, "effet": "A+40" }, { "_id": 15, "nom": "long sword", "type": "weapon", "prix": 300, "effet": "S+20" }, { "_id": 16, "nom": "cursed long sword", "type": "weapon", "prix": 300, "effet": "S-20" } ]'
      abs="nom"
      ord="prix"
      colors="#ff0000"
      >
    </GraphicComponent>
  
    a mettre dans le View
-->

<template>
  <div>
    {{ this.nameGraph }}
    <Bar id="my-chart-id" 
    :options="{ responsive: true }" 
    :data="{
        labels: labels(),
        datasets: [{
        data: datasets(),
        backgroundColor: [this.colors]
      }]
    }" />
  </div>

</template>

<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

export default {
  name: 'GraphicComponent',
  components: { Bar },
  props:
  {
    items: Array,
    abs: String,
    ord: String,
    colors: String,
    nameGraph: String,
  },
  computed: {

    sortedItems() {
      return this.items.slice().sort((i0, i1) => i1[this.ord] - i0[this.ord])
    },


  },
  data() {
    return {

      labels() {
        return this.sortedItems.map(item => item[this.abs])
      },
      datasets() {
        return this.sortedItems.map(item => item[this.ord])
      }
    }
  }
}
</script>

