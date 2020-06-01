/** @format */

import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "demo-bild.png"}) {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
