const createStore = () => {
  let mode = "light"
  let cart = []
  let products = [
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
  ]
  const subscribers = []

  return {
    get products() {
      return products
    },
    get mode() {
      return mode
    },
    set mode(m) {
      mode = m
      subscribers.forEach((fn) => fn())
    },
    get cart() {
      return cart
    },
    addToCart(p) {
      cart.push(p)
      products.find((x) => x.id === p.id).stock--
      subscribers.forEach((fn) => fn())
    },
    removeFromCart(p, i) {
      cart.splice(i, 1)
      products.find((x) => x.id === p.id).stock++
      subscribers.forEach((fn) => fn())
    },
    emptyCart() {
      cart.length = 0
      subscribers.forEach((fn) => fn())
    },
    subscribe(fn) {
      subscribers.push(fn)
    },
  }
}

const store = createStore()

export default store
