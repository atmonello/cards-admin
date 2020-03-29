<template>
  <li :class="{ dark: card.color == 'black', light: card.color == 'white' }">
    <h3>{{ card.content }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: block;
  height: 300px;
  width: 240px;
  box-shadow: $card-shadow;
  box-sizing: border-box;
  padding: 0.8rem;

  &.dark {
    background-color: #000;
    color: #fff;
  }

  &.light {
    background-color: #fff;
    color: #000;
  }
}
</style>
