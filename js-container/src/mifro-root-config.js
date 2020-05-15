import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@mifro/products",
  app: () => System.import("@mifro/products"),
  activeWhen: ["/", (location) => location.pathname.startsWith("/p")],
})
registerApplication({
  name: "@mifro/nav",
  app: () => System.import("@mifro/nav"),
  activeWhen: ["/", (location) => location.pathname.startsWith("/n")],
})

start({
  urlRerouteOnly: true,
})
