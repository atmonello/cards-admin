<template>
  <v-app class="mnl-cards">
    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      class="mnl-cards__menu"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link class="mnl-cards__menu__link" to="/login"
                >Login</nuxt-link
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cards</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link class="mnl-cards__menu__link" to="/cards"
                >Browse cards</nuxt-link
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="header" app clipped-left class="mnl-cards__header">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">MNL Cards</nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="mnl-cards__wrapper">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss">
.mnl-cards {
  &__menu,
  &__header {
    &#drawer,
    &#header {
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  &__wrapper {
    background-color: #555;
  }
}
</style>
