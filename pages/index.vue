<template>
  <v-container>
    <v-row>
      <v-col>
        <cards-container :cards="cards"> </cards-container>
      </v-col>
    </v-row>
    <v-col>
      <v-col class="text-center">
        <v-btn @click="refreshCards()"
          ><v-icon>mdi-refresh</v-icon> Sortear novamente</v-btn
        >
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { shuffleArray } from "../utils/Functions";
import CardsContainer from "../components/cards/container";

export default {
  components: {
    CardsContainer
  },
  asyncData({ $axios }) {
    return $axios.get("/cards").then((response) => {
      return { cards: shuffleArray(response.data.message[0]).slice(0, 12) };
    });
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("page", ["setLoading"]),
    async refreshCards() {
      this.setLoading(true);
      this.cards = await this.$axios.get("/cards").then((response) => {
        this.setLoading(false);
        return shuffleArray(response.data.message[0]).slice(0, 12);
      });
    }
  }
};
</script>

<style lang="scss"></style>
