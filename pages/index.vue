<template>
  <div>
    <h1>Hello</h1>
    <div v-for="item in decks">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decks: []
    }
  },
  async asyncData({ $axios }) {
    let { data } = await $axios.get("");
    return { decks: data };
  },
  methods: {
    async showDeck() {
      let res = await this.$store.dispatch("getDecks");
    }
  },
  name: 'IndexPage',
}
</script>
