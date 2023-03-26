const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: []
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('').then((res) => {
          const decks = [];
          for (let key in res) {
            decks.push({...res.data[key], id: key})
          }
          vuexContext.commit('setDecks', decks);
        })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks);
      }
    },
    getters: {}
  })
}

export default createStore();
