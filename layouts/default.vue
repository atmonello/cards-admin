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
        <nuxt-link class="mnl-cards__menu__link" to="/login">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link class="mnl-cards__menu__link" to="/cards">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cards</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Browse cards
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="header" app clipped-left class="mnl-cards__header">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mnl-cards__header__title">
        <nuxt-link to="/"><h1 class="display-2">MNL Cards</h1></nuxt-link>
      </v-toolbar-title>
      <div
        v-if="logged"
        class="mnl-cards__header__user text-center"
        @click.prevent
      >
        <p class="title ma-0">{{ user.firstName }}</p>
        <v-btn text small color="error" @click.prevent="logout()"
          ><v-icon class="body-2">mdi-logout</v-icon
          ><span class="body-1">SAIR</span></v-btn
        >
      </div>
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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapState("page", {
      loading: (state) => state.loading
    }),
    ...mapState(["logged", "user"])
  },
  methods: {
    ...mapActions("page", ["setLoading"]),
    ...mapActions(["setLogged", "setUser"]),
    logout() {
      this.setLoading(true);
      setTimeout(() => {
        this.setLogged(false);
        this.setUser({});
        this.setLoading(false);
        this.$cookies.remove("mnl-user-token");
      }, 1000);
    }
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
    &__title {
      flex: 1;
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
