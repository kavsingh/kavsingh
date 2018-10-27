const { promisify } = require('util')
const { createReadStream, createWriteStream } = require('fs')
const { includes, filter, pipe, placeholder: _ } = require('lodash')
const writeFile = promisify(require('fs').writeFile)
const readDir = promisify(require('recursive-readdir'))
const path = require('path')
const zlib = require('zlib')

// Provided by NearlyFreeSpeech:
// https://members.nearlyfreespeech.net/wiki/HowTo/GzipStatic
const dotHtAccess = `
Header add Vary accept-encoding
RewriteEngine on
RewriteCond %{HTTP:Accept-Encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)$ $1.gz [L]
`
const compressAsset = assetPath => {
  const input = createReadStream(assetPath)
  const output = createWriteStream(`${assetPath}.gz`)

  return new Promise((resolve, reject) => {
    input.on('error', error => reject(error))
    output.on('error', error => reject(error))
    output.on('finish', () => resolve(`${assetPath} compressed`))

    input.pipe(zlib.createGzip()).pipe(output)
  })
}

const compressAssets = assetPaths => Promise.all(assetPaths.map(compressAsset))

const writeHtAccess = destPath => writeFile(destPath, dotHtAccess)

const dist = path.resolve(__dirname, '../../out')
const shouldCompress = pipe(
  path.extname.bind(path),
  includes(_, ['.js', '.css', '.html', '.png', '.json']),
)
readDir(dist)
  .then(filter(shouldCompress))
  .then(compressAssets)
  .then(() => writeHtAccess(`${dist}/.htaccess`))
  .catch(error => console.error(error.toString()))
