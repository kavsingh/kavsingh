const dotenv = require('dotenv')
const path = require('path')
const rsync = require('rsyncwrapper')

dotenv.config()
const { DEPLOY_DOMAIN, DEPLOY_USER, DEPLOY_PATH } = process.env

rsync(
  {
    src: path.join(__dirname, '../../out/'),
    dest: `${DEPLOY_USER}@${DEPLOY_DOMAIN}:${DEPLOY_PATH}`,
    ssh: true,
    recursive: true,
    delete: true,
    args: ['--group=www-data', '--chmod=ug=rwX,o-rwX', '--progress'],
    onStdout(data) {
      process.stdout.write(data)
    },
    onStderr(data) {
      process.stdout.write(data)
    },
  },
  error => {
    if (error) console.error(error.message)
  }
)
