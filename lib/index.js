const indexesConcurrently = require('./rules/create-indexes-concurrently');

module.exports.rules = {
  'create-indexes-concurrently': indexesConcurrently,
};
