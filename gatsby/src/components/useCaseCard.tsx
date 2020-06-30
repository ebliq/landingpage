/** @format */

import React from 'react'

interface Props {
  title: string
  description: string
  icon: any
}

const UseCaseCard: React.FC<Props> = ({title, description, icon: Icon}: any) => (
  <div className="md:w-1/3 w-full flex justify-center item-center flex-col px-4">
    <Icon className="h-32 md:h-48  w-full p-6 md:p-8 " />
    <div className="w-full">
      <h3>{title}</h3>
      <p className="text-gray">{description}</p>
    </div>
  </div>
)
export default UseCaseCard
