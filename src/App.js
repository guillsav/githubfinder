import React, { Component } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import Navbar from "./components/Navbar/Navbar.component"

import "./App.css"

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }
}

export default App
