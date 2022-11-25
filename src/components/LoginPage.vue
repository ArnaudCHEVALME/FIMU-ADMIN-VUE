<template>
  <v-card max-width="500">
    <v-card-title>
      Connexion FIMU
    </v-card-title>
    <v-card-text>
      <v-input>
        <v-row>
          <v-col cols="3">

          </v-col>
          <v-col cols="6">
            <v-row>
              <v-text-field
                  label="Login"
                  prepend-icon="mdi-account"
                  hide-details="auto"
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
      </v-input>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>
          mdi-arrow-right-circle-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => {
    return {
      show: false,
      password: ""
    }
  }
};
</script>

<style scoped>

</style>