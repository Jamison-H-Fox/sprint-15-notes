const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session')

/*
    // configure express-session middleware
    server.use(
        session({
            name: 'notsession', // default is connect.sid
            secret: 'nobody tosses a dwarf!',
            cookie: {
                maxAge: 1 * 24* 60 * 60 * 1000,
                secure: true, // only set cookies over https. Server will not send back a cookie over http.
                httpOnly: true, // don't les js code access cookies. Browser extensions run js code on your browser!
            }, // 1 day in milliseconds
            resave: false,
            saveUninitialized: false,
        })
    )
*/

/*
    // to hash a password:
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password.hash;

    // to verify a password:
    // find the user in the db by it's username then
    if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
        return res.status(401).json({ error: 'Incorrect credentials' });
    }
*/

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