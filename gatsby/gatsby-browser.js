/** @format */

import './src/styles/default.css'

const ReactGA = require('react-ga')
const uuid = require('uuid')

const GA_LOCAL_STORAGE_KEY = 'ga:clientId'
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// const state = localStorage.getItem('Privacy');
if (localStorage) {
  if (localStorage.getItem(GA_LOCAL_STORAGE_KEY)) {
    ReactGA.initialize('UA-172367707-1', {
      gaOptions: {
        storage: 'none',
        clientId: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      },
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  } else {
    localStorage.setItem(GA_LOCAL_STORAGE_KEY, uuid.v4())
    ReactGA.initialize('UA-172367707-1', {
      gaOptions: {
        storage: 'none',
        clientId: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      },
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}
