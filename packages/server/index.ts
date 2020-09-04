if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.js')
} else {
  module.exports = require('./src/index.ts')
}
