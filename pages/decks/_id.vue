<template>
  <div>
    <form @submit.prevent="updateProduct">
      <input v-model="name" placeholder="Product name"/>
      <input v-model="price" placeholder="Product price"/>
      <input v-model="description" placeholder="Description price"/>
      <button type="submit">Update product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      description: ""
    };
  },

  async mounted() {
    const productId = this.$route.params.id;
    const response = await this.$axios.get(`http://localhost:8005/api/products/${productId}`);
    const {name, price, description} = response.data;
    this.name = name;
    this.price = price;
    this.description = description;
  },

  methods: {
    async updateProduct() {
      const productId = this.$route.params.id;
      const response = await this.$axios.put(`http://localhost:8005/api/products/${productId}`, {
        name: this.name,
        price: this.price,
        description: this.description,
        created_at: "2023-03-23T22:43:08.000000Z",
        updated_at: "2023-03-23T22:43:09.000000Z"
      });

      this.$router.push('/')
    },
  },
};
</script>
