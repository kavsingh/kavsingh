/* eslint-disable no-console, global-require */

const dev = process.env.NODE_ENV !== 'production'
const fs = require('fs')
const express = require('express')
const compression = require('compression')
const path = require('path')
const next = require('next')

const useHttps = process.env.HTTPS === 'httpslocal'
const tilde = path.resolve.bind(path, process.env.HOME)

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  /*
    Incorporate service worker as per https://github.com/ooade/NextSimpleStarter
  */
  const expressApp = express()

  expressApp.use(compression())

  // serve service worker
  expressApp.get('/sw.js', (req, res) =>
    res.sendFile(path.resolve('./static/sw.js'))
  )

  expressApp.get('*', (req, res) => handle(req, res))

  // SSL for local dev to test service worker
  const server = useHttps
    ? require('https').createServer(
        {
          cert: fs.readFileSync(tilde('.localhost-ssl/cert.pem')),
          key: fs.readFileSync(tilde('.localhost-ssl/key.pem')),
        },
        expressApp
      )
    : expressApp

  server.listen(3000, err => {
    if (err) throw err
    console.log('> App running on port 3000')
  })
})
