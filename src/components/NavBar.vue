<template>
  <v-navigation-drawer app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          FIMU BACK END
        </v-list-item-title>
        <v-list-item-subtitle>
          Connecté en tant que Null
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-select v-if="saisons.length != 0"
        :items="saisons"
        item-text="dateSaison"
        item-value="saisonId"
        label="Saisons"
        return-object
        @change="updateSelectedSaison"
    ></v-select>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
          v-for="item in routes"
          :key="item.name"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content @click="$router.push(item.path)">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavBar",
  computed:{
    ...mapState(["saisons", "routes"])
  },
  methods:{
    async updateSelectedSaison(saison){
      await this.$store.commit("setSelectedSaison", saison)
      await this.$store.dispatch("loadEveryThing", saison.saisonId)
    }
  }
}
</script>

<style scoped>

</style>