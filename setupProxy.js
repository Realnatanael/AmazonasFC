const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://amazonas-fc.vercel.app',
      changeOrigin: true,
    })
  );
};