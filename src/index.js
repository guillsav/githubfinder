import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

import GitHubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"

ReactDOM.render(
  <React.StrictMode>
    <GitHubState>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </GitHubState>
  </React.StrictMode>,
  document.getElementById("root")
)
