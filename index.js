const JSONStream = require('JSONStream')

module.exports = {
  in: JSONStream.parse(),
  out: JSONStream.stringify('', '', ''),
}
