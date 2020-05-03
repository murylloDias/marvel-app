import React from "react"
import PropTypes from "prop-types"

import GlobalStyled from "../../styles/globalStyled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
