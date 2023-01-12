<template>
  <v-card
      class="rounded-lg"
      max-width="fit-content"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ news.titre }}
      </p>
      <div class="text--primary">
        {{ news.description }}
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle>
      <p class="">
        {{ news.publishAt }}
      </p>
    </v-card-subtitle>
    <NewsModifier
      :propNews="news"
      @submit="updateNews"
    ></NewsModifier>
  </v-card>
</template>

<script>
import NewsModifier from "@/components/NewsModifier.vue";
import axios from "axios";

export default {
  components: {NewsModifier},
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  name: "CardNews",
  methods:{
    async updateNews(news) {
      let saisonId = this.$store.state.selectedSaison.saisonId;
      await axios.put('/api/news/'+ this.news.newsId, news);
      await this.$store.dispatch('fetchNews', saisonId );

    }

  }
};

</script>

<style scoped>

</style>