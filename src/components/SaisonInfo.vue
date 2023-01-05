<template>
  <v-card rounded width="400px">
    <v-card-title>
      <v-row>
        <v-col>
          <v-row>date: {{ saison.dateSaison }}</v-row>
          <v-row>Thème: {{ saison.theme }}</v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-img :src="getImage()" width="200px" height="100px">
      </v-img>
      {{ saison.bannierePath }}
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
    getImage(){
      return require(`../../public/banniereSaison/${this.saison.bannierePath}.png`)
    },
  }
}
</script>

<style scoped>

</style>