/** @format */

import React from 'react'

import ConnectedIcon from '../assets/connected.svg'

const UseCase: any = () => (
  <React.Fragment>
    <div id="feature" className="px-4 md:px-16 text-center py-4 md:py-12 flex justify-center items-center flex-col">
      <h2>Mögliche Anwedungsfälle für uns sind</h2>
      <p className="text-gray">
        Die App ermöglicht Ihnen Informationen zu Kunden in Echtzeit zu generieren und verarbieten
      </p>
      <ConnectedIcon className="h-48 w-48   md:p-12 md:w-1/2 md:h-full" />
    </div>
  </React.Fragment>
)

export default UseCase
