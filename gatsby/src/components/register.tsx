/** @format */

import React from 'react'
import PaperPlane from '../assets/paper-plane.svg'
import Loader from '../assets/loader.svg'
import {useRegister} from '../hooks/useRegister'

const Register = () => {
  const ref = React.useRef(null)
  const {submit, error, loading} = useRegister(ref)
  return (
    <section className="container mx-auto max-w-4xl">
      <div id="demo" className="flex justify-center flex-col px-4 md:px-16 text-center py-12">
        <h3>
          Sei teil unserer kostenloser Alpha <br /> Start Ende August!
        </h3>
        <p className="text-gray">
          Melde dich zur kostenlosen Alpha an. Erhalte dadurch ab Ende August zu über 30 ausgewählten Themen Erkenntnis,
          Neuigkeiten und Wissenswertes.
        </p>

        <div className="mt-12 h-12 flex justify-center">
          <div
            className={`bg-light-gray flex w-full justify-center items-center rounded-full md:max-w-lg mx-2 md:mx-0 p-1
          ${error && 'border-solid border border-error '}`}>
            <input
              type="email"
              ref={ref}
              className="h-full bg-light-gray w-4/5 md:2/3 rounded-full px-4 outline-none"
              placeholder="Max.Mustermann@email.de"
            />
            <button
              onClick={submit}
              disabled={error ? true : false}
              className=" h-full ripple-bg-primary  w-1/5 md:w-1/3
          rounded-full cursor-pointer px-4 outline-none border-solid border 
          border-primary text-white flex justify-center items-center">
              {!loading ? (
                <>
                  <span className="text-white hidden md:block">anmelden</span>
                  <PaperPlane className="h-6 w-6 md:ml-4" />
                </>
              ) : (
                <Loader className="h-full py-1" />
              )}
            </button>
          </div>
        </div>
        <div className="mt-12 h-12 flex justify-center text-error">
          <h5 className="text-center text-error">{error || ' '}</h5>
        </div>
      </div>
    </section>
  )
}

export default Register
