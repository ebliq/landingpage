/** @format */

import React from 'react'
import {Link} from 'gatsby'

const Footer = ({author}) => (
  <footer className="p-4 flex items-center justify-between bg-gray">
    <div className="text-secondary" style={{fontWeight: 700}}>
      <Link to="/impressum" style={{textDecoration: 'none'}}>
        Impressum
      </Link>
    </div>
    <div>
      © {new Date().getFullYear()}
      {` `}
      {author}
    </div>
  </footer>
)

export default Footer
