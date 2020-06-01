/** @format */

import React from 'react'
import PaperPlane from '../assets/paper-plane.svg'

const Register = () => (
  <div id="demo" className="flex justify-center flex-col py-12">
    <h3 className="text-center">Unsere Beta erscheint am 10 Juni</h3>
    <div className="mt-12 h-12 flex justify-center">
      <div className="bg-light-gray flex w-full justify-center items-center rounded-full md:max-w-lg mx-2 md:mx-0 p-1">
        <input
          className="h-full bg-light-gray w-4/5 md:2/3 rounded-full  px-4 outline-none"
          placeholder="Max.Mustermann@email.de"
        />
        <button
          className=" h-full ripple-bg-primary  w-1/5 md:w-1/3
     rounded-full cursor-pointer px-4 outline-none border-solid border 
     border-primary text-white flex justify-center items-center">
          <span className="text-white hidden md:block">anmelden</span>
          <PaperPlane className="h-6 w-6 md:ml-4" />
        </button>
      </div>
    </div>
  </div>
)

export default Register
