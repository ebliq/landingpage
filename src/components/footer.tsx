/** @format */

import React from 'react'

const Footer = ({author}) => (
  <footer className="p-4 flex items-center justify-between bg-gray">
    <div className="text-secondary" style={{fontWeight: 700}}>
      <a style={{textDecoration: 'none'}} href="https://github.com/gillkyle/gatsby-starter-landing-page">
        Contact Us
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}
      {` `}
      {author}
    </div>
  </footer>
)

export default Footer
