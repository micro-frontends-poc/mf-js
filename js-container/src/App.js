import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
import MicroFrontend from "./components/MicroFrontend"

const { PRODUCT_HOST: productHost, CART_HOST: cartHost } = process.env

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [mode, setMode] = useState("light")
  useEffect(() => {}, [])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
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
        <section className="relative flex-grow">
          {/* <MicroFrontend host={productHost} name="Product" /> */}
        </section>
      </div>
    </Router>
  )
}

export default App
