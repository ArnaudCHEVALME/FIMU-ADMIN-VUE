<template>
  <v-card rounded width="400px">
    <v-card-title>
      <v-row>
        <v-col>
          <v-row>date: {{ saison.date }}</v-row>
          <v-row>Pays à l'honneur: {{ saison.pays.nomPays }}</v-row>
          <v-row>Thème: {{ saison.theme }}</v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-img :src="getImage(saison.image)" width="200px" height="100px">
      </v-img>
      <v-row>
        <v-col cols="3" v-for="(couleur, id) in saison.couleurs" :key="id">
          <v-chip>{{ couleur.nom }}</v-chip>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('close')">
        fermer
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SaisonInfo",
  props: {
    saison: Object
  },
  methods: {
    getImage(path){
      return require(`../assets/${path}`)
    },
  }
}
</script>

<style scoped>

</style>