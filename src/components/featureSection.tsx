/** @format */

import React from 'react'

import FeatureCard from './featureCard.tsx'
import ReportIcon from '../assets/reports.svg'
import InsightsIcon from '../assets/insights.svg'
import MobileIcon from '../assets/mobile.svg'
import RealTimeIcon from '../assets/realtime.svg'

const features = [
  {
    title: 'Feature 1',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: ReportIcon,
  },
  {
    title: 'Feautre 2',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: InsightsIcon,
  },
  {
    title: 'Feature 3',
    description: 'Includes plugins for analytics, building sitemaps, and optimizing images',
    icon: RealTimeIcon,
  },
]

const FeatureSection: any = () => (
  <React.Fragment>
    <div className="px-4 md:px-16 py-4 text-center mt-0 sm:mt-8">
      <h2>Enthaltene Features</h2>
      <p className="text-gray">Give a final call to action because that's what the cool kids are doing.</p>
    </div>
    {features.map((feature, index) => (
      <FeatureCard
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
        key={index}
        orientation={index}
      />
    ))}
  </React.Fragment>
)

export default FeatureSection
