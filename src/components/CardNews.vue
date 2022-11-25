<template>
  <v-card
      class="mx-md-auto rounded-lg"
      max-width="688"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ title }}
      </p>
      <div class="text--primary">
        {{ content }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
          text
          color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-subtitle>
      <p class="">
        {{ date }}
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
  name: "CardNews",
  data: () => {
    return {
      title: "News 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem.",
      date: "12/12/2019"
    }
  }
};

</script>


<style scoped>

</style>