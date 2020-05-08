import React from "react"

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props
    const scriptId = `micro-frontend-script-${name}`

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend()
      return
    }

    console.log("does this happen?")
    const script = document.createElement("script")
    script.id = scriptId
    script.crossOrigin = ""
    script.src = `${host}${"main.1f19ae8e.js"}`
    console.log(script)
    script.onload = this.renderMicroFrontend
    document.head.appendChild(script)
  }

  componentWillUnmount() {
    const { name, window } = this.props

    window[`unmount${name}`](`${name}-container`)
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props

    window[`render${name}`](`${name}-container`, history)
  }

  render() {
    return <main id={`${this.props.name}-container`} />
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
}

export default MicroFrontend
