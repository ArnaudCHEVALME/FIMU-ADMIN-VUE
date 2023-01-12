<template>
  <v-container class="pa-10">
    <div>
      <CreateNews></CreateNews>
    </div>
    <div class="justify-start d-flex flex-column mb-10 ml-10 mr-10 mt-4">
      <CardNews
          v-for="n in news" :key="n.newsId"
          :news="n"
          class="mb-4"
          @CreateNews="Create"
      >
      </CardNews>
    </div>
  </v-container>
</template>

<script>
import CardNews from "@/components/CardNews.vue";
import {mapState} from "vuex";
import CreateNews from "@/components/CreateNews.vue";
import axios from "axios";



export default {
  name: "NewsView",
  components: { CreateNews, CardNews},
  data: () => {
    return {
      dialog: false,
    }
  },
  computed:{
    ...mapState(["news"])
  },
  methods:{
    async Create(news) {
      let saisonId = this.$store.state.selectedSaison.saisonId;
      news.saisonId = saisonId;
      await axios.post('/api/news/', news);
      await this.$store.dispatch('fetchNews', saisonId);
    }
  }
}

</script>

<style scoped>

</style>