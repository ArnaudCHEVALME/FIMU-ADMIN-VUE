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
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card v-if="news">
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-row
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    v-model="news.titre"
                    label="Titre news"
                ></v-text-field>
              </v-row>
              <v-row
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-textarea
                    v-model="news.description"
                    label="descrition news"
                ></v-textarea>
              </v-row>
              <v-row
                  cols="12"
                  sm="6"
                  md="4"
              >
                <DatePicker
                    v-model="news.publishAt"
                    label="Date du poste"
                />
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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
            @click="submit"
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
  name: "NewsModifier",
  components: {DatePicker},
  props: {
    formTitle: String,
    propNews: Object,
  },
  data: function () {
    return {
      news: this.propNews,
      editDialog: false
    }
  },
  methods: {
    submit()  {
      this.close()
      this.$emit('submit', this.news)
    },
    close() {
      this.editDialog = false
    },
  }
}
</script>

<style scoped>

</style>