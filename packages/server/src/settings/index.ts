import * as path from 'path'
import { Record } from 'immutable'
import { Store } from 'confidence'

// ----------------------------------------------------------------------
//  Environment based filters:
//    - `process.env.NODE_ENV`
//      * development (default)
//      * production
//    - `process.env.DEPLOYMENT` - extended settings' profiles for various deployment.
// ----------------------------------------------------------------------
const { env } = process

const internals = {
  criteria: {
    mode: env.NODE_ENV,
    deployment: env.DEPLOYMENT
  },

  settings: {
    $meta: 'application settings file',
    basedir: path.join(__dirname, '..'),
    secret: env.SECRET,
    port: {
      $filter: 'mode',
      production: env.PORT,
      $default: 5000
    },
  },
}

const store = new Store(internals.settings)

export default Record(store.get('/', internals.criteria))()
