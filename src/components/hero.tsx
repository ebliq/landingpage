/** @format */

import React from 'react'

import MockupContent from './image'
import mockupFrame from '../images/ipad-pro.png'

const Hero = () => (
  <React.Fragment>
    <div
      className="flex items-center flex-col mx-8"
      style={
        {
          // backgroundImage: `url(${headerImage})`,
        }
      }>
      <div
        className="absolute top-0"
        style={{
          // backgroundImage: `url(${headerImage})`,
          zIndex: -5,
        }}
      />
      <div className="relative w-full max-w-3xl">
        <div style={{clipPath: 'inset(2% 5% round 2% 5%)'}}>
          <MockupContent />
        </div>
        <div
          className="w-full max-w-3xl absolute top-0"
          style={
            {
              // change this to display image
              // zIndex: -1,
            }
          }>
          <img src={mockupFrame} alt="outlines of shapes and confetti in the background " />
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Hero
