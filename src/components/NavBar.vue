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

<!--    <v-select v-if="saisons.length != 0"-->
<!--        :items="saisons"-->
<!--        item-text="dateSaison"-->
<!--        item-value="saisonId"-->
<!--        label="Saisons"-->
<!--    ></v-select>-->

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
          v-for="item in menus"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content @click="$router.push(item.route)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",
  computed:{

  },
  data: () => {
    {
      return {
        menus: [
          {
            title: "Artistes",
            icon: "mdi-guitar-acoustic",
            route: "/artistes"
          }, {
            title: "Scènes",
            icon: "mdi-microphone-variant",
            route: "/scenes"
          }, {
            title: "Programmation",
            icon: "mdi-clock-time-four-outline",
            route: "/programmation"
          }, {
            title: "Carte",
            icon: "mdi-map",
            route: "/carte"
          }, {
            title: "News",
            icon: "mdi-newspaper-variant-multiple",
            route: "/news"
          }, {
            title: "Statistiques",
            icon: "mdi-chart-areaspline",
            route: "/stats"
          }, {
            title: "Gestion des saisons",
            icon: "mdi-calendar",
            route: "/saisons"
          }, {
            title: "Gestion des utilisateur",
            icon: "mdi-account",
            route: "/utilisateurs"
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>