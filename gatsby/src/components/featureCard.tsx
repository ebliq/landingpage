/** @format */

import React from 'react'

const FeatureCardEven = ({title, description, icon: Icon}) => (
  <div className="max-w-4xl m-auto flex-col-reverse  md:flex-row flex justify-center items-center flex-wrap py-8 px-4 ">
    <Icon className="h-48 w-48   md:p-12 md:w-1/2 md:h-full" />
    <div className="w-full md:w-1/2 ">
      <h3>{title}</h3>
      <p className="text-gray">{description}</p>
    </div>
  </div>
)

const FeatureCardUneven = ({title, description, icon: Icon}) => (
  <div className="max-w-4xl m-auto md:flex-row flex justify-center items-center flex-wrap py-8 px-4 ">
    <div className="w-full md:w-1/2 ">
      <h3>{title}</h3>
      <p className="text-gray">{description}</p>
    </div>
    <Icon className="h-48 w-48   md:p-12 md:w-1/2 md:h-full" />
  </div>
)

interface Props {
  title: string
  description: string
  icon: any
  orientation: number
}

const FeatureCard: React.FC<Props> = ({title, description, icon, orientation}: any) =>
  orientation % 2 !== 0 ? (
    <FeatureCardEven title={title} description={description} icon={icon} />
  ) : (
    <FeatureCardUneven title={title} description={description} icon={icon} />
  )

export default FeatureCard
