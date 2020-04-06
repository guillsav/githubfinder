import React from "react"
import { withRouter, Switch, Route } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"

import "./App.css"

library.add(fab, fas, faCheckSquare, faCoffee)

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:login"
            render={props => <User {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(App)
