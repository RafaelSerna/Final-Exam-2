const TOKEN = require('../config.js')

function validateToken(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
        res.statusMessage = 'You need to send the session-exam-token';
        return res.status(401).end();
    }
    if (token !== TOKEN) {
        res.statusMessage = 'Session-exam-token invalid';
        return res.status(401).end();
    }

    next();
    /* 
        Your code goes here
    */
}

module.exports = validateToken;
