import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
        {title}
      </h1>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: ["fab", "github"]
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.array.isRequired
}

export default Navbar
