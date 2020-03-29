export const state = () => ({
  loading: false
});

export const mutations = {
  setLoading(state, update) {
    state.loading = update;
  }
};

export const actions = {
  async setLoading({ commit }, payload) {
    console.log("PAGE SET LOADING", payload);
    await commit("setLoading", payload);
  }
};
