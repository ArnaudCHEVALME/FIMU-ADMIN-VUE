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
    this.$store.dispatch("loadEveryThing")
  },
};
</script>
<header/>
