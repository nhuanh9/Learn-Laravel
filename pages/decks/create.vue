<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="createProduct">
      <div>
        <label>Name:</label>
        <input type="text" v-model="name"/>
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="description"></textarea>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" v-model.number="price"/>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      created_at: "2023-03-23T22:43:08.000000Z",
      updated_at: "2023-03-23T22:43:09.000000Z"
    }
  },
  methods: {
    async createProduct() {
      const {name, description, price,  created_at, updated_at} = this
      await axios.post('http://localhost:8005/api/products', {name, description, price})
      this.$router.push('/')
    }
  }
}
</script>
