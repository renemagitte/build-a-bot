import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    // {commit} is destructed out of the "context object"??? Ok..
    getParts({ commit }) {
      // *IMPORTANT* in order for this to work in development we need vue.config.js!!!! And for this you need webpack.
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      // Returns a promise:
      return axios.post('/api/cart', cart) // adds to api
        .then(() => commit('addRobotToCart', robot)); // adds to local state?
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
});
