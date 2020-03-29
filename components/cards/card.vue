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
  box-shadow: 2px 3px 0px 1px rgba(0, 0, 0, 0.25);
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
