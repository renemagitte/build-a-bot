import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    // foo(state) {
    //   return `users-getter/${state.foo}`;
    // },
    // If we want to access root state form users module, we can pass root as The Third Param
    foo(state, getters, rootState) {
      return `users-getter/${rootState.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      console.log('tjoho');
    },
  },
};
