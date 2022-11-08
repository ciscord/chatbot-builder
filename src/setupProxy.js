const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'http://api:8080',
            pathRewrite: { '^/api' : '' },
            headers: { 'X-Forwarded-Prefix': '/api' },
            changeOrigin: false,
        }),
    );
};
