/** @format */

import React from 'react'
import LogoImage from '../assets/logo-text.svg'
import {Link} from 'gatsby'
const ReactGA = require('react-ga')

const items = [
  {id: 'demo', label: 'Demo'},
  {id: 'feature', label: 'Features'},
  {id: 'usecase', label: 'Usecase'},
  {id: 'contact', label: 'Contact Us'},
]

const Navigation = () => {
  const [checkedIndex, setCheckedIndex]: any = React.useState(-1)

  return (
    <nav className="hidden md:flex top-0 h-12 w-full z-50 shadow sticky bg-nav   flex-row items-center">
      <div className="h-full w-2/4 flex  ">
        <Link to="/">
          <LogoImage className="h-full w-32 p-2" />
        </Link>
      </div>

      <div className="w-2/4  flex items-end flex-col">
        <ul className="block mr-0 md:mr-12">
          {items.map((item: any, index: any) => (
            <li
              className="nav-item hover:text-primary transition ease-in duration-200 text-black"
              key={item.label}
              aria-current={checkedIndex === index}
              onClick={() => {
                setCheckedIndex(index)
              }}>
              <a
                href={`#${item.id}`}
                onClick={() => {
                  ReactGA.pageview(window.location.pathname + item.id)
                }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
