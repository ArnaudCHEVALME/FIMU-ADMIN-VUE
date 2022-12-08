<template>
  <v-card
      class="rounded-lg"
      max-width="fit-content"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ news.title }}
      </p>
      <div class="text--primary">
        {{ news.content }}
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle>
      <p class="">
        {{ news.date }}
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  name: "CardNews"
};

</script>

<style scoped>

</style>