<template>
  <v-container class="pa-10">
    <div class="d-flex">
      <h1>News</h1>
      <v-dialog
          v-model="dialog"
          persistent
          max-width="800px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              large
              color="success"
              dark
              v-bind="attrs"
              v-on="on"
              class="ml-auto"
          >
            Nouveau post +
          </v-btn>
        </template>
        <v-card class="rounded-xl pa-4">
          <v-card-title>
            <span class="text-h5">Ajouter un post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="10"
                    md="8"
                >
                  <v-text-field
                      label="Titre de l'annonce"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      label="Description"
                      required
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-switch
                      v-model="switch1"
                      inset
                      :label="`Notifier les utilisateurs`"
                  ></v-switch>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Fermer
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Enregistrer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

    <div class="justify-start d-flex flex-column mb-10 ml-10 mr-10 mt-4">
      <CardNews
          v-for="news in newsList" :key="news.id"
          :news="news"
          class="mb-4">
      </CardNews>
    </div>
  </v-container>
</template>

<script>
import CardNews from "@/components/CardNews.vue";
import { mapState } from "vuex";

export default {
  name: "NewsView",
  computed: {
    ...mapState(['news']),
  },
  components: {CardNews}

  
}

</script>

<style scoped>

</style>