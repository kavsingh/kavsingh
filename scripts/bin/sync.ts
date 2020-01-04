import path from 'path'

import dotenv from 'dotenv'
import rsync from 'rsyncwrapper'

dotenv.config()

const { DEPLOY_DOMAIN, DEPLOY_USER, DEPLOY_PATH } = process.env

rsync(
  {
    src: path.join(__dirname, '../../out/'),
    dest: `${DEPLOY_USER}@${DEPLOY_DOMAIN}:${DEPLOY_PATH}`,
    ssh: true,
    recursive: true,
    delete: true,
    exclude: ['.well-known/'],
    args: ['--group=www-data', '--chmod=u=rwX,go=rX', '--progress'],
    onStdout(data) {
      process.stdout.write(data)
    },
    onStderr(data) {
      process.stdout.write(data)
    },
  },
  error => {
    if (error) console.error(error.message)
  },
)
