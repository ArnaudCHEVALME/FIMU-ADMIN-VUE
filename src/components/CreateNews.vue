<template>
  <v-dialog
    v-model="editDialog"
  >
    <template v-slot:activator="{on, attrs}">
      <v-btn
          class="ma-2"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Création d'une news
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="titre"
                      label="Titre de la news">
        </v-text-field>
        <v-textarea
            v-model="description"
            label="Description de la news">
        </v-textarea>
        <DatePicker
            v-model="date"
            label="Date de publication">
        </DatePicker>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="close"
        >
          Annuler
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="CreateNews"
        >
          Enregistrer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";

export default {
  name: "CreateNews",
  components: {DatePicker},
  data() {
    return {
      titre: null,
      description: null,
      date: null,
      editDialog: false,
    }
  },
  methods: {
    CreateNews() {
      this.close()
      this.$emit('CreateNews', this.news)
    },
    close() {
      this.editDialog = false
    },
  }
}
</script>

<style scoped>

</style>