/** @format */

import React from 'react'
const Register = () => (
  <div className="flex justify-center flex-col my-12">
    <h3 className="text-center">Unsere Beta erscheint am 10 Juni</h3>
    <div className="mt-12 h-12 flex justify-center">
      <div className="bg-light-gray rounded-full md:w-2/5">
        <input
          className="h-full bg-light-gray w-3/5 md:2/3 rounded-full  px-4 outline-none"
          placeholder="Max.Mustermann@email.de"
        />
        <button
          className=" h-full ripple-bg-primary  w-2/5 md:2/3
     rounded-full cursor-pointer px-6 outline-none border-solid border border-primary text-white">
          anmelden
        </button>
      </div>
    </div>
  </div>
)

export default Register
