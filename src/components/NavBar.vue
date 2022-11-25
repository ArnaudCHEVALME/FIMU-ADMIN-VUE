<template>
  <v-navigation-drawer permanent>
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

    <v-list dense nav>
      <v-list-item
          v-for="item in menus"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    {
      return {
        menus: [
          {
            title: "Artistes",
            icon: "mdi-guitar-acoustic"
          }, {
            title: "Scènes",
            icon: "mdi-microphone-variant"
          }, {
            title: "Programmation",
            icon: "mdi-clock-time-four-outline"
          }, {
            title: "Carte",
            icon: "mdi-map"
          }, {
            title: "News",
            icon: "mdi-newspaper-variant-multiple"
          }, {
            title: "Statistiques",
            icon: "mdi-chart-areaspline"
          }, {
            title: "Gestion des saisons",
            icon: "mdi-calendar"
          }, {
            title: "Gestion des utilisateur",
            icon: "mdi-account"
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>