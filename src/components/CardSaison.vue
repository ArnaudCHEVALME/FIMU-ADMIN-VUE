<template>
  <v-container>
    <v-card class="mx-auto" elevation="10" max-width="344">
      <v-card-text>
        <v-row>
          <v-img v-if="saison.bannierePath != null" :src="getImage()"></v-img>
          <div v-else>Pas d'image</div>
        </v-row>
        <v-row>
          <v-col>
            {{ saison.dateSaison }}
          </v-col>
          <v-col>
            {{ saison.theme }}
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
                mdi-pen
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
          </v-col>
          <v-col cols="4">
            <v-btn color="red">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card>
    <v-dialog  v-model="dialogState"
              fullscreen
              hide-overlay
              transition="dialog-top-transition">
      <!-- <SaisonInfo :saison="saison" @close="closeInfos"></SaisonInfo> -->
      <update-saison @ChangeStateDialog="closeInfos" :saison="this.saison" ></update-saison>
    </v-dialog>
  </v-container>
</template>

<script>
import UpdateSaison from "@/components/UpdateSaison.vue";
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
    getImage(){
      return require(`../../public/banniereSaison/${this.saison.bannierePath}.png`)
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
    UpdateSaison
  }
}
</script>

<style scoped>

</style>