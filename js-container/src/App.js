import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  useEffect(() => {}, [])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
      <div className="App">
        <Navigation
          products={products}
          cartToggle={cartToggle}
          onCartToggleChange={handleCartToggle}
        />
        <section className="h-full flex relative pt-24"></section>
      </div>
    </Router>
  )
}

export default App
