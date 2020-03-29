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

    <v-content v-if="loading" class="mnl-cards__loading">
      <v-container class="fill-height">
        <v-row>
          <v-col class="text-center align-center">
            <h1 class="mnl-cards__loading__title">
              <v-icon id="icon">mdi-loading</v-icon>CARREGANDO
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapState("page", {
      loading: (state) => state.loading
    })
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

  &__loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.75);
    display: flex;

    &__title {
      color: #000;

      #icon {
        color: #000;
        animation: rotation 0.75s infinite linear;
        font-size: 40px;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
  }
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
