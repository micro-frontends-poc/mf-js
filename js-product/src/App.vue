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
import Product from "./components/Product.vue"

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
      products: [
        {
          id: 1,
          name: "Children of Men",
          description: `Children of Men is a 2006 dystopian action thriller film directed and co-written
           by Alfonso Cuarón.`,
          stock: 3,
        },
        {
          id: 2,
          name: "Hunt for the Wilderpeople",
          description: `A national manhunt is ordered for a rebellious kid and his foster uncle who go
            missing in the wild New Zealand bush.`,
          stock: 2,
        },
        {
          id: 3,
          name: "The Handmaiden",
          description: `With help from an orphaned pickpocket, a Korean con man devises an elaborate plot to seduce and bilk a Japanese woman out of her inheritance.`,
          stock: 2,
        },
      ],
    }
  },
  mounted() {
    const that = this
    window.addEventListener("cartItemRemoved", function(e) {
      const item = e.detail.product
      const product = that.products.find((x) => x.id == item.id)
      product.stock++
    })
  },
  methods: {
    addToCart(product) {
      //should work, but doesn't
      this.$emit("itemAddedToCart", product)
      // works
      const addEvent = new CustomEvent("addToCart", {
        bubbles: true,
        composed: true,
        detail: {
          vm: this,
          product: product,
        },
      })
      this.$el.dispatchEvent(addEvent)
    },
  },
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 1rem;
}
</style>
