const NohmClass = require('nohm').NohmClass

module.exports = function createNohm(config) {
  return new NohmClass(config)
}