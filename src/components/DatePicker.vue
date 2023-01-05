<template>
  <v-dialog
      ref="dialog"
      v-model="visible"
      width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
        v-model="date"
        scrollable
        @change="updateDate"
    >
      <v-btn
          text
          color="red"
          @click="date=null"
      >
        reset
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          text
          color="primary"
          @click="visible = false"
      >
        Close
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    value: Date,
    label: String
  },
  data: function () {
    return {
      visible:false,
      date: this.value
    }
  },
  methods:{
    updateDate: function(){
      this.$emit('input', new Date(this.date))
    }
  }
}
</script>

<style scoped>

</style>