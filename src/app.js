'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    const [path, params] = req.url.slice(1).split('?');

    const searchParams = new URLSearchParams(params);

    const query = Object.fromEntries(searchParams.entries());
    const parts = path.split('/');

    res.end(JSON.stringify({
      parts, query,
    }));
  });

  return server;
};

module.exports = { createServer };
