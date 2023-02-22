require('dotenv').config();

const server = require('./api/server.js');

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`*** Server listening on http://localhost:${PORT} ***`);
    console.log(`*** Server listening on http://${hostname}:${PORT} ***`);
})