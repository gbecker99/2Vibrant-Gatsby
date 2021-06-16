import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = () => {
    
  const data = useStaticQuery(graphql`
  query {
      featureimage: file(relativePath: {eq: "GoldBKG.jpg"}) {
          publicURL
      }
  }
  
  `)
  
  return ( 
      <FeatureImageWrapper>
      <img src={data.featureimage.publicURL} style={{
              position: "absolute",
              left: -33,
              top: -30,
              width: "130%",
              height: "117%"

      }} />
   </FeatureImageWrapper>
  )
  
}