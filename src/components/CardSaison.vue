<template>
  <container>
    <v-card v-for="(saison, id) in saisons" :key="id">
      <v-img src="{{ saison.image }}"></v-img>
        <v-card-text>
          {{ saison.date }}: {{ saison.theme }}
        </v-card-text>
      <v-card-subtitle>
        <v-button>Le boutton</v-button>
      </v-card-subtitle>
    </v-card>
  </container>
</template>

<script>
export default {
  name: "CardSaison",
  data: () => ({
    saisons: [
      {
        date: "22/10/2022",
        theme: "Shrek",
        image: "./assets/logo.png",
        paysId: 1,
        pays: {
          paysId: 1,
          nomPays: "Zimbabwe"
        }
      }, {
        date: "23/10/2022",
        theme: "Imaginaire",
        image: "./assets/logo.png",
        paysId: 2,
        pays: {
          paysId: 2,
          nomPays: "Listembourg"
        }
      }
    ]
  })
};
</script>

<style scoped>

</style>