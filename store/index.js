import {
  state as PageState,
  mutations as PageMutations,
  actions as PageActions
} from "./page";

export const state = () => ({
  ...PageState
});

export const mutations = {
  ...PageMutations
};

export const actions = {
  ...PageActions
};
