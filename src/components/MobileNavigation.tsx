/** @format */

import React from 'react'
import LaunchImage from '../assets/launch.svg'
import CrossIcon from '../assets/close.svg'
import MenuIcon from '../assets/menu.svg'

const items = [{id: 'demo', label: 'Demo'}, {id: 'feature', label: 'Features'}, {id: 'contact', label: 'Contact Us'}]

const MobileNavigation = () => {
  const [toggle, setToggle]: any = React.useState(false)
  const [checkedIndex, setCheckedIndex]: any = React.useState(-1)

  return (
    <React.Fragment>
      <div className="md:hidden top-0 pointer h-12 w-full z-50 shadow sticky bg-nav flex  flex-row items-center">
        <div className="h-full w-2/4 flex  ">
          <LaunchImage className="h-full w-32" />
        </div>
        <div className="w-2/4  flex items-end flex-col">
          <button
            className="pointer flex  w-12 h-12 items-center flex-col py-4 justify-between active:py-32"
            onClick={() => {
              setToggle(!toggle)
            }}>
            {!toggle ? <MenuIcon /> : <CrossIcon />}
          </button>
        </div>
      </div>
      {toggle && (
        <nav className="w-full h-screen flex items-center flex-col fixed bg-nav z-50 justify-center">
          <ul className="block ">
            {items.map((item: any, index: any) => (
              <li
                className="nav-item-mobile hover:text-primary transition ease-in duration-200 text-black"
                key={item.label}
                aria-current={checkedIndex === index}
                onClick={() => {
                  setCheckedIndex(index)
                }}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </React.Fragment>
  )
}

export default MobileNavigation
