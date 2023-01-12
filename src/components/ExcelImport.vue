<template>
  <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
  ></v-file-input>
</template>

<script>
export default {
  name: "AddExcel",
  data: () => ({
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
  }),

  methods: {
    docEnvoie() {
      file = document.querySelector('doc');
      console.log(this.file);
      return file;
    }
  },
}
</script>