import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo400.png" }) {
        publicURL
      }
    }
  `)

  return (
    <LogoWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
    </LogoWrapper>
  )
}