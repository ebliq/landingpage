/** @format */

import React from 'react'

import FeatureCard from './featureCard.tsx'
import ReportIcon from '../assets/reports.svg'
import InsightsIcon from '../assets/insights.svg'
import MobileIcon from '../assets/mobile.svg'
import RealTimeIcon from '../assets/realtime.svg'

const features = [
  {
    title: 'Fokus auf Deutsche Quellen und Sprache ...',
    description:
      '...Wir nutzen “State-of-the-art” Deep Learning Technologien von Google, Facebook und Microsoft. Wir haben diese Technologien auf die Deutsche Sprache übertragem und dafür eigene deutsche KI-Modelle trainiert.',
    icon: ReportIcon,
  },
  {
    title: 'Zuverlässig Informationen erhalten ...',
    description:
      'Verstehe die Einflussfaktor, welche Nachricht in den Massenmedien erscheint, welche berichtswert diese hat. Wir generieren die Stimmung für Artikel. Extrahieren den Benefits für einzelne Unternehmen. Lieferen Kundenspezifische Kennzahlen. ',
    icon: InsightsIcon,
  },
  {
    title: 'Weil nur Echtzeit zählt ...',
    description:
      '... Wir erzeugen unsere Erkenntnisse, die Neuigkeiten und das Wissen dabei in Nahezu Echtzeit. Unsere Daten aktualisieren wir dazu alle 5 Minuten und erzeugen die Insights direkt im anschluss.',
    icon: RealTimeIcon,
  },
]
{
  /* <div className=" text-center py-24 bg-primary">    </div> */
}
const FeatureSection: any = () => (
<<<<<<< HEAD
  <section id="feature" className="">
    <div className=" text-center py-24 bg-primary">
      <h1 className="text-white">Das zeichnet uns aus</h1>
      <p className="text-white">Give a final call to action because that's what the cool kids are doing.</p>
    </div>
    <div className="container">
      {features.map((feature, index) => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          key={index}
          orientation={index}
        />
      ))}
=======
  <React.Fragment>
    <div id="feature" className="px-4 md:px-16 text-center py-12 ">
      <h1>Das zeichnet uns aus</h1>
      <p className="text-gray">Give a final call to action because that's what the cool kids are doing.</p>
>>>>>>> d26a9aef1780f05ca1d35b82a0332ae5bd288c6c
    </div>
  </section>
)

export default FeatureSection
