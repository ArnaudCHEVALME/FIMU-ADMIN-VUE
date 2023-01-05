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
    this.fetchPays()
  },
  methods: {
    async fetchSaisons() {
      await this.$store.dispatch('fetchSaisons')
    },
    async fetchNews() {
      await this.$store.dispatch('fetchNews')
    },
    async fetchPays() {
      await this.$store.dispatch('fetchPays')
    }
  },
};
</script>
<header/>
