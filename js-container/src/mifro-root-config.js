import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@mifro/products",
  app: () => System.import("@mifro/products"),
  activeWhen: "/",
  customProps: {},
})
registerApplication({
  name: "@mifro/nav",
  app: () => System.import("@mifro/nav"),
  activeWhen: "/",
  customProps: {},
})
registerApplication({
  name: "@mifro/cart",
  app: () => System.import("@mifro/cart"),
  activeWhen: "/",
  customProps: {},
})

start({
  urlRerouteOnly: true,
})
