<template>
  <v-autocomplete
      prepend-icon="mdi-map"
      v-model="value"
      :items="items"
      label="Outlined style"
      dense
      outlined
  ></v-autocomplete>
</template>

<script>
export default {
  name: "SearchBar",
  data: ()=> {
    return {
      value: "",
      items: [
        "pomme", "epée", "cape"
      ]
    }
  }
}
</script>

<style scoped>

</style>