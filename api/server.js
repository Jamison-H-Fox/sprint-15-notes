const express = require('express');

const server = express();
server.use(express.json());

server.use('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to sprint 15 notes'
    })
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;