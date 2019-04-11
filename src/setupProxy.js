const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api/*', { target: 'https://quiet-crag-69131.herokuapp.com' }));
}
