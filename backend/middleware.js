const { JWT_SECRET } = require('./config');
const jwt = require('jsonwebtoken');

function authMiddleware (req, res, next)
{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer '))
    {
        return res.status(403).json({
            messgae : "Invalid token"
        });
    }

    const token = authHeader.split(' ')[1];

    try
    {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId)
        {
            req.userId = decoded.userId;
            next();
        }
        else
        {
            res.status(403).json({
                message : "Some error occurred"
            });
        }
    }
    catch (e)
    {
        console.error(e);

        res.status(403).json({
            message : "Some error occurred"
        });
    }
}

module.exports =  {authMiddleware};