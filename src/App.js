import React, { Component } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/Alert"

import { GITHUB } from "./githubVariables"

import "./App.css"

library.add(fab, fas, faCheckSquare, faCoffee)
const { client_id, client_secret } = GITHUB

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`
    )

    this.setState({ users: res.data.items, hasUsers: true, loading: false })
  }

  // Clear users from State
  clearUsers = () =>
    this.setState({ users: [], loading: false, hasUsers: false })

  // Set an alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    )
  }
}

export default App
