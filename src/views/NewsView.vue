<template>
  <v-container>
    <h1>News</h1>
    <v-btn>AAA</v-btn>
  <div class="justify-start d-flex flex-column pa-8">
    <CardNews
        v-for="news in newsList" :key="news.id"
        :news="news"
        class="ma-2">
    </CardNews>
  </div>
  </v-container>
</template>

<script>
import CardNews from "@/components/CardNews.vue";

export default {
  name: "NewsView",
  components: {CardNews},
  data: () => {
    return {
      newsList: [
        {
          id: 0,
          title: "News 1",
          content: "trop mimis ce content",
          date: "01/01/2020"
        },
        {
          id: 1,
          title: "News 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.\n Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
          date: "01/01/2020"
        },
        {
          id: 2,
          title: "News 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
          date: "01/01/2020"
        },
        {
          id: 3,
          title: "News 4",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
          date: "01/01/2020"
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>