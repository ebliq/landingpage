/** @format */

import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
function SEO() {
  const {
    site: {siteMetadata},
  }: any = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
      }
    `,
  )
  const fullURL: any = path => (path ? `${siteMetadata.siteUrl}${path}` : siteMetadata.siteUrl)
  const metaTags: any = [
    {charset: 'utf-8'},
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {
      rel: 'canonical',
      href: fullURL(),
    },
    {
      name: `description`,
      content: siteMetadata.description,
    },
    {
      property: `og:title`,
      content: 'title',
    },
    {
      property: `og:description`,
      content: siteMetadata.description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: 'title',
    },
    {
      name: `twitter:description`,
      content: siteMetadata.description,
    },
  ].concat(
    siteMetadata.keywords.length > 0
      ? {
          name: `keywords`,
          content: siteMetadata.keywords.join(`, `),
        }
      : [],
  )
  return (
    <Helmet
      htmlAttributes={{
        lang: 'de',
      }}
      title={`${siteMetadata.title}`}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={metaTags}>
      <script async src="https://www.google.com/recaptcha/api.js?render=6LcceP8UAAAAAFkGrW_vEhNa-Ho7Y1QbWCCpVIXU" />
    </Helmet>
  )
}

export default SEO
