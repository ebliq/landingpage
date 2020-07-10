/** @format */

import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script async src="https://www.google.com/recaptcha/api.js?render=6LcceP8UAAAAAFkGrW_vEhNa-Ho7Y1QbWCCpVIXU" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script async src="https://cdn.jsdelivr.net/npm/uuid@latest/dist/umd/uuidv4.min.js" />
        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        // https://developers.google.com/tag-manager/devguide
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        // defines window.localstorage key
        const GA_LOCAL_STORAGE_KEY = 'ga:clientId'
        // checks if localstorage is available
        if (window.localStorage) {
          // checks if user was already connected and loads client_id from localstorage
          if (localStorage.getItem(GA_LOCAL_STORAGE_KEY)) {
            // creates new tracker with same client_id as the last time the user visited
            gtag('js', new Date())
            gtag('config', 'GA_MEASUREMENT_ID', {
              send_page_view: true,
              client_storage: 'none',
              client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
            })
          } else {
            // creates client_id and saves it in localStorage -> currently random number better would be a uuid
            window.localStorage.setItem(GA_LOCAL_STORAGE_KEY, uuidv4())
            // creates new tracker with the new client_id
            gtag('js', new Date())
            gtag('config', 'GA_MEASUREMENT_ID', {
              send_page_view: true,
              client_storage: 'none',
              client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
            })
          }
        }
      `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
