<template>
  <div>
    <nuxt-link to="">Home</nuxt-link>
    <nuxt-link to="decks">Decks</nuxt-link>

    <input type="text" v-model="deckId">
    <button @click="showDeck">Detail</button>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decksID: '1'
    }
  },
  methods: {
    showDeck() {
      this.$router.push(`/decks/${this.decksID}`)
    }
  },
  name: 'IndexPage',
}
</script>
