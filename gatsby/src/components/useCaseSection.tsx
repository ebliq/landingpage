/** @format */

import React from 'react'

import UseCaseCard from './useCaseCard'
import IpadIcon from '../assets/ipad.svg'
import ScaleIcon from '../assets/scale.svg'
import SentimentIcon from '../assets/sentiment.svg'

const usecases = [
  {
    title: 'CRM - Key Account',
    description:
      'Finde neue Interessenten und erhalte bestehen Kundenkontakt. Recherchiere Echtzeit-Nachrichtenverfolgung für die Unternehmen in Ihrer Pipeline zu personalisieren.',
    icon: IpadIcon,
  },
  {
    title: 'Führungskräfte & Marketingexperten',
    description:
      'Behalte deine Themen im Auge, beobachte, was die Leute darüber sagen. Erkenne Branchentrends und sei stets aktuell, um in echtzeit reagieren zu können.',
    icon: ScaleIcon,
  },
  {
    title: 'dein Anwendungsfall',
    description: 'Komme auf uns zu wenn du das Gefühl hast ebliq könnte genau das richtige für dich sein.',
    icon: SentimentIcon,
  },
]

const UsecaseSection: any = () => (
  <React.Fragment>
    <div id="usecase" className="px-4 md:px-16 text-center py-12 ">
      <h2>So könntest du ebliq verwenden und davon profitieren</h2>
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
