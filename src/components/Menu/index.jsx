import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as Styled from "./styled"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <Img fixed={logo.childImageSharp.fixed} alt="logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
              activeClassName="active"
            >
              <Styled.MenuWrapper><span>Home</span></Styled.MenuWrapper>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/galeria"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
              activeClassName="active"
            >
              <Styled.MenuWrapper><span>Galeria</span></Styled.MenuWrapper>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sobre"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
              activeClassName="active"
            >
              <Styled.MenuWrapper><span>Sobre</span></Styled.MenuWrapper>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Menu
