const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedVal = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedVal.username) {
            req.username = decodedVal.username;
            next();
        }
        else {
            res.status(403).json({
                msg : "this user isn't authorized"
            })
        }
    }
    catch(e) {
        res.json({
            msg : "Incorrect inputs"
        })
    }
}
module.exports = userMiddleware;