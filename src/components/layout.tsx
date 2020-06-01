/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 *
 * @format
 */

import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

import Footer from './footer'
import '../styles/default.css'
import Navigation from './Navigation'

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation />
        <main className="flex justify-center flex-col ">{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

export default Layout
