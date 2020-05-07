<template>
  <div class="product">
    <div class="img-container w-20 h-20 bg-gray-300 mr-4">
      <!-- <img src=" https://www.placecage.com/c/100/100" :alt="product.name" /> -->
    </div>
    <div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span>€{{ product.price }}</span>
    </div>
    <button class="btn-main " @click="addToCart">+</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$emit("addProduct", this.product)
    },
  },
}
</script>

<style lang="scss">
.product {
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 2px 2px 15px #afb8d4;
  display: flex;

  .img-container {
    border-radius: 10px;
    overflow: hidden;
  }

  h3 {
    margin-top: 0;
  }
  p {
  }

  button {
    border-width: 0px;
    border-radius: 50%;
    line-height: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5fdab1;
    align-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.01);
      background: lighten(#5fdab1, 5%);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
