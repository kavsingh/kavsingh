import fs from 'fs'
import path from 'path'
import zlib from 'zlib'
import { promisify } from 'util'
import { createReadStream, createWriteStream } from 'fs'

import { __, filter, includes, map, pipe } from 'lodash/fp'
import recursiveReadDir from 'recursive-readdir'

const writeFile = promisify(fs.writeFile)

const readDir = promisify<string, string[]>(recursiveReadDir)

const dist = path.resolve(__dirname, '../../out')
// Provided by NearlyFreeSpeech:
// https://members.nearlyfreespeech.net/wiki/HowTo/GzipStatic
const dotHtAccess = `
Header add Vary accept-encoding
RewriteEngine on
RewriteCond %{HTTP:Accept-Encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)$ $1.gz [L]
`

const shouldCompress = pipe(
  path.extname.bind(path),
  includes(__, ['.js', '.css', '.html', '.png', '.json']),
)

const compressAsset = (assetPath: string) => {
  const input = createReadStream(assetPath)
  const output = createWriteStream(`${assetPath}.gz`)

  return new Promise<string>((resolve, reject) => {
    input.on('error', error => reject(error))
    output.on('error', error => reject(error))
    output.on('finish', () => resolve(`${assetPath} compressed`))

    input.pipe(zlib.createGzip()).pipe(output)
  })
}

const writeHtAccess = (destPath: string) => writeFile(destPath, dotHtAccess)

readDir(dist)
  .then(filter(shouldCompress))
  .then(pipe(map(compressAsset), Promise.all.bind(Promise)))
  .then(compressed => console.log(`${compressed.length} files compressed`))
  .then(() => writeHtAccess(`${dist}/.htaccess`))
  .catch(console.error)
