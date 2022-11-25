<template>
  <v-container>
    <v-card v-for="(saison, id) in saisons" :key="id" class="mx-auto" max-width="344" elevation="10">
      <v-img :src="saison.image" height="60px"></v-img>
        <v-card-text>
          {{ saison.date }}: {{ saison.theme }}
        </v-card-text>
      <v-card-subtitle>
        <v-row>
          <v-col cols="1">
          </v-col>
          <v-col cols="4">
            <v-btn color="grey">
              <v-icon>
                mdi-dots-horizontal-circle-outline
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
          </v-col>
          <v-col cols="4">
            <v-btn color="red">
              <v-icon>
                mdi-delete-outline
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CardSaison",
  data: () => ({
    saisons: [
      {
        date: "22/10/2022",
        theme: "Shrek",
        image: '../src/assets/logo.png',
        paysId: 1,
        pays: {
          paysId: 1,
          nomPays: "Zimbabwe"
        }
      }, {
        date: "23/10/2022",
        theme: "Imaginaire",
        image: '../assets/logo.png',
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