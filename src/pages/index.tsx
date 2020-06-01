/** @format */

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Header from '../components/header'
import Register from '../components/register'
import Features from '../components/featureSection'
import CallToAction from '../components/ContactUs'
import LaunchImage from '../assets/launch.svg'
import BackgroundImage from '../images/background.png'
import UseCase from '../components/UseCases'

const IndexPage = () => (
  <Layout>
    <SEO />
    <div
      className="h-full pb-32"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}>
      <div className=" max-w-4xl m-auto flex-row flex justify-center items-center flex-wrap">
        <div className="w-full md:w-2/3 ">
          <Header />
        </div>
        <LaunchImage className="h-0 w-0  md:p-12 md:w-1/3 md:h-full" />
      </div>

      <Register />
      <Hero />
    </div>

    <Features />
    <UseCase />
    <CallToAction />
  </Layout>
)

export default IndexPage
