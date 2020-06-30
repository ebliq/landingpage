/** @format */

import React from 'react'

import MockupContent from './image'
import mockupImage from '../images/mock-ipad.png'

const Hero = () => (
  <React.Fragment>
    <div className="flex items-center flex-col mx-8">
      <div className="absolute top-0" />
      <div className="relative w-full max-w-3xl">
        <div style={{clipPath: 'inset(2% 2% round 2% 2%)'}}>
          <MockupContent />
        </div>
        <div className="w-full max-w-3xl absolute top-0">
          <img src={mockupImage} alt="outlines of shapes and confetti in the background " />
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Hero
