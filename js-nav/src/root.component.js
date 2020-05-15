import React, { useState, useEffect } from "react"
import "./App.css"
import Navigation from "./Navigation"

function Root() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [mode, setMode] = useState("light")
  useEffect(() => {}, [])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <div
      className={`App h-full flex flex-col ${
        mode === "dark" ? "bg-gray-900" : ""
      }`}
    >
      <Navigation
        products={products}
        cartToggle={cartToggle}
        onCartToggleChange={handleCartToggle}
      />
      <section className="relative flex-grow"></section>
    </div>
  )
}

export default Root
