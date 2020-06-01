/** @format */

import React from 'react'
import LogoImage from '../assets/logo-text.svg'
import CrossIcon from '../assets/close.svg'
import MenuIcon from '../assets/menu.svg'

const items = [
  {id: 'demo', label: 'Demo'},
  {id: 'feature', label: 'Features'},
  {id: 'usecase', label: 'Usecase'},
  {id: 'contact', label: 'Contact Us'},
]
const MobileNavigation = () => {
  const [toggle, setToggle]: any = React.useState(false)
  const [checkedIndex, setCheckedIndex]: any = React.useState(-1)

  return (
    <React.Fragment>
      <div className="md:hidden top-0 pointer h-12 w-full z-50 shadow sticky bg-nav flex  flex-row items-center">
        <div className="h-full w-2/4 flex  ">
          <LogoImage className="h-full w-32 p-2" />
        </div>
        <div className="w-2/4  flex items-end flex-col">
          <button
            className="pointer flex  w-12 h-12 items-center flex-col justify-between active:py-32"
            onClick={() => {
              setToggle(!toggle)
            }}>
            {!toggle ? <MenuIcon className="h-full w-8" /> : <CrossIcon className="h-full w-8" />}
          </button>
        </div>
      </div>
      {toggle && (
        <nav className="w-full h-screen flex items-center flex-col fixed bg-nav z-50 ">
          <ul className="block my-32">
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
