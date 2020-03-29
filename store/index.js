import {
  state as PageState,
  mutations as PageMutations,
  actions as PageActions
} from "./page";

export const state = () => ({
  ...PageState,
  logged: false,
  user: {}
});

export const mutations = {
  ...PageMutations,
  setLogged(state, update) {
    state.logged = update;
  },
  setUser(state, update) {
    state.user = update;
  }
};

export const actions = {
  ...PageActions,
  setLogged({ commit }, update) {
    commit("setLogged", update);
  },
  setUser({ commit }, update) {
    const { token } = update;
    if (token) this.$cookies.set("mnl-user-token", token);
    commit("setUser", update);
  }
};

export const getters = {
  getLogged(state) {
    return state.logged;
  }
};
