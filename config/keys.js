// keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are in production , return set of keys
    module.exports = require('./prod');
} else {
// dev environment return dev keys
    module.exports = require('./dev');
}