/** @format */

import React from 'react'

const Footer = ({siteTitle}) => (
  <footer className="p-4 flex items-center justify-between bg-gray">
    <div className="text-secondary" style={{fontWeight: 700}}>
      <a style={{textDecoration: 'none'}} href="https://github.com/gillkyle/gatsby-starter-landing-page">
        Contact Us
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}
      {` `}
      {siteTitle}
    </div>
  </footer>
)

export default Footer
