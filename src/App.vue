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
  },
  methods: {
    async fetchSaisons() {
      await this.$store.dispatch('fetchSaisons')
    }
  },
};
</script>
<header/>
