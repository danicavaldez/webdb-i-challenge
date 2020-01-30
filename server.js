const express = require('express');

const AccountRouter = require('./routers/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get("/", (req, res) => {
  res.send('<h1>Hello World</h1>')
});

module.exports = server;