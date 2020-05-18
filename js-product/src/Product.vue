<template>
  <div class="product" :class="mode">
    <div class="img-container"></div>
    <h3 class="text-lg font-bold">{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <span class="stock">{{ stock }}</span>
    <button class="btn-main" :disabled="product.stock == 0" @click="addToCart">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["product", "mode"],

  computed: {
    stock() {
      if (this.product.stock == 0) return "Out of stock"
      else if (this.product.stock == 1) return "Only 1 item left"
      else return `${this.product.stock} items in stock`
    },
  },
  methods: {
    addToCart() {
      this.$emit("addProduct", this.product)
    },
  },
}
</script>

<style lang="scss">
.product {
  --color-primary: #14a523;
  --color-secondary: #0f6818;
  &.light {
    --color-text: hsl(210, 29%, 24%);
    --color-bg: hsl(0, 0%, 100%);
    --color-img: hsl(225, 43%, 95%);
  }

  &.dark {
    --color-text: hsl(0, 0%, 89%);
    --color-bg: hsl(235, 29%, 18%);
    --color-img: hsl(225, 2%, 34%);
  }
  color: var(--color-text);
  background: var(--color-bg);
  padding: 1rem;
  margin: 1rem;
  border: 5px solid var(--color-primary);
  box-shadow: 0px 0px 0px var(--color-secondary);
  display: grid;
  grid-template-columns: 7rem 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "image title title"
    "image desc desc"
    "image stock button";

  .img-container {
    background: var(--color-img);
    grid-area: image;
    border-radius: 10px;
    overflow: hidden;
    height: 6rem;
    width: 6rem;
  }

  h3 {
    grid-area: title;
    margin: 0;
  }
  .stock {
    grid-area: stock;
    font-style: italic;
    margin-top: auto;
    margin-bottom: auto;
  }
  p {
    grid-area: desc;
  }

  button {
    grid-area: button;
    background: transparent;
    color: var(--color-text);
    border-width: 2px;
    border-radius: 4px;
    border-style: solid;
    border-color: var(--color-text);
    line-height: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.5s;
    font-weight: bold;
    transition: box-shadow 0.5s ease-out;
    &:hover {
      transform: scale(1.01);
      border-color: var(--color-primary);
      box-shadow: -2px 2px 0px #460073;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
      &:hover {
        box-shadow: none;
        border-color: var(--color-text);
      }
    }
  }
}
</style>
