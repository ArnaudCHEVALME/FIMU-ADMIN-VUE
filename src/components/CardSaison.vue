<template>
  <v-card class="mx-auto" elevation="10" max-width="344">
    <v-card-text>
      <v-img :src="require('../assets/shrek.png')"></v-img>
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
</template>

<script>
export default {
  name: "CardSaison",
  data: () => {
    return {
      saison: {
        date: "22/10/2022",
        theme: "Shrek",
        image: '../assets/logo.png',
        paysId: 1,
        pays: {
          paysId: 1,
          nomPays: "Zimbabwe"
        }
      }
    }
  }
}
</script>

<style scoped>

</style>