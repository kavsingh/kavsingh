/* eslint-env node */
/* eslint-disable no-console, global-require */

const express = require('express')
const path = require('path')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const tilde = path.resolve.bind(path, process.env.HOME)

app.prepare().then(() => {
  /*
    Incorporate service worker as per https://github.com/ooade/NextSimpleStarter
  */
  const expressApp = express()

  // serve service worker
  expressApp.get('/sw.js',
    (req, res) => res.sendFile(path.resolve('./.next/sw.js')))

  expressApp.get('*', (req, res) => handle(req, res))

  // SSL for local dev to test service worker
  const server = dev || process.env.HTTPS === 'https'
    ? require('https').createServer({
      cert: fs.readFileSync(tilde('.localhost-ssl/cert.pem')),
      key: fs.readFileSync(tilde('.localhost-ssl/key.pem')),
    }, expressApp)
    : expressApp

  server.listen(3000, err => {
    if (err) throw err
    console.log('> App running on port 3000')
  })
})
