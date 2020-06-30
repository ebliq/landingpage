/** @format */

import React from 'react'

import UseCaseCard from './useCaseCard'
import IpadIcon from '../assets/ipad.svg'
import ScaleIcon from '../assets/scale.svg'
import SentimentIcon from '../assets/sentiment.svg'

const usecases = [
  {
    title: 'Anwedungsfall 1',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: IpadIcon,
  },
  {
    title: 'Anwedungsfall 2',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: ScaleIcon,
  },
  {
    title: 'Anwedungsfall 3',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: SentimentIcon,
  },
]

const UsecaseSection: any = () => (
  <React.Fragment>
    <div id="usecase" className="px-4 md:px-16 text-center py-12 ">
      <h2>Mögliche Anwedungsfälle für uns sind</h2>
      <p className="text-gray">
        Die App ermöglicht Ihnen Informationen zu Kunden in Echtzeit zu generieren und verarbieten
      </p>
      <div className=" w-full md:flex-row flex justify-center items-stretch flex-wrap py-8 px-4 ">
        {usecases.map((feature, index) => (
          <UseCaseCard title={feature.title} description={feature.description} icon={feature.icon} key={index} />
        ))}
      </div>
    </div>
  </React.Fragment>
)

export default UsecaseSection
