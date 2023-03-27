<template>
  <div>
    <h1>Hello</h1>
    <div v-for="item in decks">
      {{ item.name }}
      <button @click="delProduct(item.id)">Delete</button>
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
  async asyncData({$axios}) {
    let {data} = await $axios.get("");
    return {decks: data};
  },
  methods: {
    async showDeck() {
      let res = await this.$store.dispatch("getDecks");
    },
    async delProduct(id) {
      await this.$axios.delete("/" + id);
      this.$router.push('/')
    }
  },
  name: 'IndexPage',
}
</script>
