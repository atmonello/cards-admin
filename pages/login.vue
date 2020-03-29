<template>
  <v-container class="mnl-cards__login d-flex px-5 my-5 flex-column">
    <v-row>
      <v-col><h2>Login</h2></v-col>
    </v-row>
    <v-form v-if="!logged" id="form" @submit.prevent="submit()">
      <v-row>
        <v-col>
          <v-text-field
            id="email"
            v-model="form.email"
            label="E-mail"
            type="email"
            clearable
            prepend-icon="mdi-at"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            id="password"
            v-model="form.password"
            label="Senha"
            type="password"
            clearable
            prepend-icon="mdi-lock"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn type="submit">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row v-else>
      <v-col>
        <h2>Você está logada(o)!</h2>
      </v-col>
    </v-row>
    <v-snackbar v-model="error" right :timeout="3000" color="error">
      <div class="d-flex align-center justify-start">
        <v-icon>mdi-alert</v-icon>
        <p class="mb-0 ml-3">Erro ao efetuar login</p>
      </div>
    </v-snackbar>
    <v-snackbar v-model="success" right :timeout="3000" color="success">
      <div class="d-flex align-center justify-start">
        <v-icon>mdi-check-circle</v-icon>
        <p class="mb-0 ml-3">Login efetuado com sucesso</p>
      </div>
    </v-snackbar>
  </v-container>
</template>

<style lang="scss">
.mnl-cards {
  &__login {
    max-width: 600px;
    background-color: rgb(240, 240, 240);
    box-shadow: $card-shadow;

    h2 {
      color: #000;
    }

    #form {
      button * {
        color: #fff;
      }

      *,
      input,
      label {
        color: #000;

        &::before {
          border-color: #000;
        }
      }
    }
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      error: false,
      success: false
    };
  },
  computed: {
    ...mapState(["logged"])
  },
  methods: {
    ...mapActions(["setLogged", "setUser"]),
    ...mapActions("page", ["setLoading"]),
    submit() {
      this.setLoading(true);
      this.error = false;
      this.success = false;
      this.$axios
        .post("/sessions", {
          email: this.form.email,
          password: this.form.password
        })
        .then((response) => {
          const {
            data: {
              details: {
                token,
                user: { email, firstName, id }
              }
            }
          } = response;
          this.setLogged(true);
          this.setUser({
            token,
            email,
            firstName,
            id
          });
          this.setLoading(false);
          this.success = true;
          setTimeout(() => {
            if (this.success) this.success = false;
          }, 3000);
        })
        .catch(() => {
          this.setLoading(false);
          this.error = true;
          setTimeout(() => {
            if (this.error) this.error = false;
          }, 3000);
        });
    }
  }
};
</script>
