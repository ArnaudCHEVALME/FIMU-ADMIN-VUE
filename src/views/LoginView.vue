<template>
  <v-img :src="require('../assets/fimu.jpg')">
    <Login></Login>
  </v-img>
</template>

<script>
import Login from '../components/LoginPage'
export default {
  name: "LoginView",
  components: {
    Login,
  },
}
</script>

<style scoped>

</style>