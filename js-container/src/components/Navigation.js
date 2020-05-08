import React from "react"
import { Link } from "react-router-dom"

const Navigation = (props) => {
  const openCart = (e) => {
    e.preventDefault()
    props.onCartToggleChange(!props.cartToggle)
  }

  return (
    <nav className="w-full flex items-center justify-between bg-accenture flex-wrap p-6 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-bold text-xl tracking-tight">MICROSHOP</span>
        </Link>
      </div>
      <button
        className="inline-block text-sm px-4 py-2 ml-auto leading-none rounded border-white border-2 hover:border-transparent text-white hover:text-purple-800 hover:bg-white"
        onClick={(e) => openCart(e)}
      >
        Checkout ({props.products.length})
      </button>
    </nav>
  )
}

export default Navigation
