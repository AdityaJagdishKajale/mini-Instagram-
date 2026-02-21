const jwt = require('jsonwebtoken');

function isLoggedIn(req, res, next) {
    if (!req.cookies.token) {
        return res.redirect('/');
    }
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.redirect('/');
    }
}

module.exports = isLoggedIn;
