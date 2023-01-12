<template>
  <v-dialog
    v-model="editDialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          class="ma-2"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card v-if="thing">
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  v-model="thing.libelle"
                  label="Nom du truc"
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <DatePicker
                  v-model="thing.date_pas_bon"
                  label="Date de péremption"
              />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  v-model="thing.date_rangement"
                  label="Date Rangement"
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  v-model="thing.quantity"
                  label="Quantité"
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  v-model="thing.quantity"
                  label="Quantité"
              ></v-text-field>
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
          Cancel
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="submit"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

export default {
  name: "ThingModifier",
  props: {
    formTitle: String,
    propThing: Object,
  },
  data: function () {
    return {
      thing: this.propThing,
      editDialog:false
    }
  },
  methods: {
    submit: () => {
      this.close()
      this.$emit('submit', this.thing)
    },
    close() {
      this.editDialog = false
    },
  }
}
</script>

<style scoped>

</style>