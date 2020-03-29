<template>
  <ul class="mnl-cards__cards-container">
    <card
      v-for="card in cards"
      :key="card.id"
      class="mnl-cards__cards-container__card"
      :card="card"
    />
  </ul>
</template>

<script>
import Card from "./card";

export default {
  components: {
    Card
  },
  props: {
    cards: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss">
.mnl-cards {
  &__cards {
    &-container {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        flex-shrink: 0;
        margin: 0.8rem;
      }
    }
  }
}
</style>
