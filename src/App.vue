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
    this.fetchSaisons()
    this.fetchNews()
  },
  methods: {
    async fetchSaisons() {
      await this.$store.dispatch('fetchSaisons')
    },
    async fetchNews() {
      await this.$store.dispatch('fetchNews')
    }
  },
};
</script>
<header/>
