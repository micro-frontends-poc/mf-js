<template>
  <div id="app">
    <product
      v-for="p in products"
      :key="p.id"
      :product="p"
      :mode="mode"
      @addProduct="addToCart"
    />
  </div>
</template>

<script>
import { store } from "@mifro/root-config"
import Product from "./Product.vue"

export default {
  name: "App",
  props: {
    mode: {
      default: "light",
    },
  },
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.products = store.products
    store.subscribe(() => {
      this.products = store.products
    })
  },
  methods: {
    addToCart(product) {
      store.addToCart(product)
    },
  },
}
</script>
