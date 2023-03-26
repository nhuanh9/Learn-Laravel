import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default () => new Vuex.Store({
  state: () => ({}),
  mutations: {},
  actions: {
    async getDecks() {
      let res = await axios.get('http://localhost:8005/api/products')
      return res;
    },
  },
  modules: {}
})
