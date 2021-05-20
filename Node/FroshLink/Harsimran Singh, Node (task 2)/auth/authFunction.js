const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({
            success: false,
            msg: 'Access denied, no token'
        });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtEnc'));
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            msg: 'Invalid Token'
        });
    }
}