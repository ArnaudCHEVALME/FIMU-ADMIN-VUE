<template>
  <v-container>
      <card-saison v-for="(saison, id) in saisons" :key="id"
                   :saison="saison">
      </card-saison>
  </v-container>
</template>

<script>
import CardSaison from "@/components/CardSaison.vue";
export default {
  name: "SaisonPage",
  data() {
    return {
      saisons: [
        {
          date: "22/10/2022",
          theme: "Shrek",
          image: 'fimu.jpg',
          paysId: 1,
          pays: {
            paysId: 1,
            nomPays: "Zimbabwe"
          },
          couleurs: [
            {nom: 'FFFFFF'},
            {nom: 'FFFFFF'},
          ]
        },
        {
          date: "11/09/2001",
          theme: "Boom",
          image: 'shrek.png',
          paysId: 1,
          pays: {
            paysId: 1,
            nomPays: "New York"
          },
          couleurs: [
            {nom: 'shrek'},
            {nom: 'fiona'},
          ]
        }
      ]
    }
  },
  components: {
    CardSaison
  }
}
</script>

<style scoped>

</style>