<template>
  <v-app>
    <v-main>
      <router-view name="menu"/>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>


export default {
  name: 'App',
  data: () => ({
  }),
  mounted() {
    this.loadEveryThing()
  },
  methods: {
    async loadEveryThing() {
      await this.$store.dispatch('fetchSaisons')
      await this.$store.dispatch('fetchPays')
      await this.$store.dispatch('fetchNews')
    },
  },
};
</script>
<header/>
