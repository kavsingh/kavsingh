/*
  Install offline service worker
  from https://github.com/ooade/NextSimpleStarter
*/

const offlineInstall = (path: string) => {
  if (
    process.env.NODE_ENV === 'production' &&
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator
  ) {
    navigator.serviceWorker
      .register(path, { scope: './' })
      .then(reg => {
        reg.onupdatefound = function regOnUpdateFound() {
          const installingWorker = reg.installing

          if (!installingWorker || !installingWorker.onstatechange) {
            return
          }

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
      })
      .catch(e => {
        console.error('Error during service worker registration:', e)
      })
  }
}

export default offlineInstall
