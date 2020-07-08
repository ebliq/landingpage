/** @format */

import React from 'react'
import {Link} from 'gatsby'

const Footer = ({author}) => (
  <footer className="  bg-primary py-20">
    <div className="container flex items-center justify-between">
      <Link to="/impressum" className="text-secondary">
        Impressum
      </Link>
      <div>
        © {new Date().getFullYear()}
        {author}
      </div>
    </div>
  </footer>
)

export default Footer
