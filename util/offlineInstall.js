/* global process */
/* eslint-disable no-console, no-param-reassign */
/*
  Install offline service worker
  from https://github.com/ooade/NextSimpleStarter
*/

if (
  process.env.NODE_ENV === 'production'
  && typeof window !== 'undefined'
  && 'serviceWorker' in navigator
) {
  navigator.serviceWorker.register('/sw.js', { scope: './' }).then(reg => {
    reg.onupdatefound = function regOnUpdateFound() {
      const installingWorker = reg.installing

      installingWorker.onstatechange = function workerOnStateChange() {
        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              console.log('New or updated content is available.')
            } else {
              console.log('Content is now available offline!')
            }
            break
          case 'redundant':
            console.log('The installing serviceWorker became redundant.')
            break
          default:
            break
        }
      }
    }
  }).catch(e => {
    console.error('Error during service worker registration:', e)
  })
}
