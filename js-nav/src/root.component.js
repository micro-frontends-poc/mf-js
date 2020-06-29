import React, { useState, useEffect } from "react"
import { store } from "@mifro/root-config"

function Root() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [mode, setMode] = useState("light")
  useEffect(() => {
    store.subscribe(() => {
      setProducts(store.cart)
    })
  }, [])

  const openCart = (e) => {
    e.preventDefault()
    window.location.pathname === "/cart"
      ? history.pushState({}, "", "/")
      : history.pushState({}, "", "/cart")
    setCartToggle(!cartToggle)
  }

  return (
    <div
      className={`App h-full flex flex-col ${
        mode === "dark" ? "bg-gray-900" : ""
      }`}
    >
      <nav className="w-full flex items-center justify-between bg-yellow-600 flex-wrap p-6 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-xl tracking-tight">MICROSHOP</span>
        </div>
        <button
          className="inline-block text-sm px-4 py-2 ml-auto leading-none rounded border-white border-2 hover:border-transparent text-white hover:text-purple-800 hover:bg-white"
          onClick={(e) => openCart(e)}
        >
          Checkout ({products.length})
        </button>
      </nav>
      <section className="relative flex-grow"></section>
    </div>
  )
}

export default Root
