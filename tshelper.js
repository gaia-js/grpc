const { serviceBuilder, objectBuilder } = require('@gaiajs/gaiajs/lib/tshelper');

module.exports = {
  watchDirs: {
    ...serviceBuilder({root: __dirname, interfacePrefix: 'IGrpc'}),
    ...objectBuilder({root: __dirname, interfacePrefix: 'IGrpc'}),
  }
}
