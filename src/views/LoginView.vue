<template>
    <v-img :src="require('../assets/fimu.jpg')">

  <v-card max-width="600" max-height="600" elevation="24">
    <v-card-title>
      Connexion FIMU
    </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-row>
          <v-col cols="3">
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-text-field
                  label="Login"
                  prepend-icon="mdi-account"
                  hide-details="auto"
                  v-model="login"
                  required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                  prepend-icon="mdi-key"
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Mot de passe"
                  counter
                  @click:append="show = !show"
              ></v-text-field>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-btn @click="send">
            <v-icon>
              mdi-arrow-right-circle-outline
            </v-icon>
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
    </v-img>
</template>

<script>
export default {
  name: "LoginView",
  data: () => {
    return {
      valid: false,
      show: false,
      password: "",
      login: ""
    }
  },
  methods: {
    send () {
      console.log(this.login, this.password)
    }
  },
};
</script>

<style scoped>

</style>