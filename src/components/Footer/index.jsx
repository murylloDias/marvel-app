import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        SocialMedia: { facebook, twitter, github },
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          SocialMedia {
            facebook
            twitter
            github
          }
          copyright
        }
      }
    }
  `)

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-md-6 mb-3">{description}</div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <a href={facebook}>
              <Styled.FacebookIcon />
            </a>
            <a href={twitter}>
              <Styled.TwitterIcon />
            </a>
            <a href={github}>
              <Styled.GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-gray-dark text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
