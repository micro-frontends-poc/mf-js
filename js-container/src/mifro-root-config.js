import { registerApplication, start } from "single-spa"
import store from "./store"

registerApplication({
  name: "@mifro/nav",
  app: () => System.import("@mifro/nav"),
  activeWhen: "/",
  customProps: {},
})
registerApplication({
  name: "@mifro/products",
  app: () => System.import("@mifro/products"),
  activeWhen: "/",
  customProps: {},
})
registerApplication({
  name: "@mifro/cart",
  app: () => System.import("@mifro/cart"),
  activeWhen: "/cart",
  customProps: { store },
})

start({
  urlRerouteOnly: true,
})

export { default as store } from "./store"
