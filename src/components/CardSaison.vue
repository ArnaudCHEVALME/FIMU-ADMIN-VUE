<template>
  <v-container>
    <v-card class="mx-auto" elevation="10" max-width="344">
      <v-card-text>
        <v-row>
          <!-- <v-img v-if="saison.bannierePath != null" :src="getImage()"></v-img> -->
          <div>Pas d'image</div>
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
            <v-btn @click="infoDialog" color="grey">
              <v-icon>
                mdi-pen
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
          </v-col>
          <v-col cols="4">
            <v-btn @click="deleteDialog" color="red">
              <v-icon >
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card>
    <v-dialog v-model="updateDialogState"
              fullscreen
              hide-overlay
              transition="dialog-top-transition">
      <update-saison @ChangeStateDialog="infoDialog" :saison="saisonUpd" ></update-saison>
    </v-dialog>
    <v-dialog width="350" height="150" v-model="deleteDialogState" persistent>
      <v-card width="350" height="150">
        <v-card-title>
          Etes-vous sur de vouloir supprimer cette saison?
        </v-card-title>
        <v-card-actions>
          <v-btn @click="deleteDialog">Non</v-btn>
          <v-btn @click="deleteSaison">Oui</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import UpdateSaison from "@/components/UpdateSaison.vue";
import axios from "axios";
export default {
  name: "CardSaison",
  props: {
    saison: Object
  },
  data () {
    return {
      deleteDialogState: false,
      updateDialogState: false,
      saisonUpd: {
        paysHonneurId: this.saison.paysHonneurId,
        dateSaison: new Date(this.saison.dateSaison),
        image: null,
        theme: this.saison.theme
      }
    }
  },
  methods: {
    getImage(){
      return require(`../../public/banniereSaison/${this.saison.bannierePath}.png`)
    },
    infoDialog(){
      this.updateDialogState = !this.updateDialogState
      console.log(this.saisonUpd.dateSaison)
    },
    async deleteSaison(){
      this.deleteDialog()
      await axios.delete('/api/saisons/'+this.saison.saisonId)
      await this.$store.dispatch('fetchSaisons')
    },
    deleteDialog(){
      this.deleteDialogState = !this.deleteDialogState
    }
  },
  components:  {
    UpdateSaison
  }
}
</script>

<style scoped>

</style>