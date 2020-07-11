/** @format */

import React from 'react'
const ReactGA = require('react-ga')

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}
const url = 'https://07are33q3i.execute-api.eu-central-1.amazonaws.com/prod/'
export const useRegister = ref => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  function submit() {
    const email: string = ref.current.value || ''
    if (email.length === 0) {
      return
    }

    const validEmail = validateEmail(email)
    if (!validEmail) {
      setError('Keine Valide Email')
      ReactGA.event({
        category: 'Beta',
        action: 'no valid Email',
        value: email,
      })
      return
    }
    setLoading(true)
    //@ts-ignore
    grecaptcha.ready(() => {
      //@ts-ignore
      grecaptcha
        .execute('6LcceP8UAAAAAFkGrW_vEhNa-Ho7Y1QbWCCpVIXU', {
          action: 'submit',
        })
        .then((token: string) => {
          submitToServer(token, email)
        })
    })
  }

  function submitToServer(token: string, email: string) {
    fetch(url, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({token, email}), // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        ReactGA.event({
          category: 'Beta',
          action: 'register successfully',
          value: email,
        })
      })
  }

  React.useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setError(null)
    }, 3000)

    return () => window.clearTimeout(timeoutID)
  }, [error, setError])

  return {submit, error, loading}
}
