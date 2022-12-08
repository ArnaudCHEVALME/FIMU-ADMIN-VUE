<template>
  <v-container>
    <v-card class="mx-auto" elevation="10" max-width="344">
      <v-card-text>
        <v-row>
          <v-img :src="getImage(saison.image)"></v-img>
        </v-row>
        <v-row>
          <v-col>
            {{ saison.pays.nomPays }}
          </v-col>
          <v-col>
            {{ saison.date }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-subtitle>
        <v-row>
          <v-col cols="1">
          </v-col>
          <v-col cols="4">
            <v-btn @click="showInfos" color="grey">
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
    <v-dialog v-model="dialogState" width="400px">
      <SaisonInfo :saison="saison" @close="closeInfos"></SaisonInfo>
    </v-dialog>
  </v-container>
</template>

<script>
import SaisonInfo from "@/components/SaisonInfo.vue";
export default {
  name: "CardSaison",
  props: {
    saison: Object
  },
  data: () => {
    return {
      dialogState: false
    }
  },
  methods: {
    getImage(path){
      return require(`../assets/${path}`)
    },
    showInfos(){
      console.log("Pute")
      this.dialogState = true
    },
    closeInfos(){
      this.dialogState = false
    }
  },
  components:  {
    SaisonInfo
  }
}
</script>

<style scoped>

</style>