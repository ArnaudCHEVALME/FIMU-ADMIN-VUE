<template>
  <div>

  <v-autocomplete
      prepend-icon="mdi-map"
      v-model="value"
      :items="items"
      label="Outlined style"
      dense
      outlined
  ></v-autocomplete>
    <DatePicker v-model="date"/>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";

export default {
  name: "SearchBar",
  components: {DatePicker},
  data: ()=> {
    return {
      date:null,
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