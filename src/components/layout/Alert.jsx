import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon="info-circle" style={{ marginRight: "5px" }} />
        {alert.msg}
      </div>
    )
  )
}

Alert.propTypes = {
  alert: PropTypes.object
}

export default Alert
