import React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import Footer from "../Footer"

import GlobalStyled from "../../styles/globalStyled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
