/** @format */

import React from 'react'

interface Props {
  title: string
  description: string
  icon: any
}

const UseCaseCard: React.FC<Props> = ({title, description, icon: Icon}: any) => (
  <div className="lg:w-1/3 w-full flex justify-center item-center flex-col px-4 self-start">
    <Icon className="h-32 md:h-48  w-full p-6 md:p-8 " />
    <div className="w-full">
      <h3>{title}</h3>
      <p className="text-gray text-justify">{description}</p>
    </div>
  </div>
)
export default UseCaseCard
