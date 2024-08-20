const jwt = require("jsonwebtoken")
const env = require("dotenv")

console.log("env=", process.env.accesswebtoken)

const verifytoken = async (req, res, next) => {

    const token = req.headers["authorization"];

    if (!token) {

        return res.status(403).json({
            success: false,
            message: "token is required"
        });
    }
    try {
        const bearer = token.split(" ");
        const bearerToken = bearer[1]
        const decodedData = jwt.verify(bearerToken, process.env.accesswebtoken);
        req.user = decodedData
        next()
    } catch (error) {
        console.log("error",error)
        return res.status(200).json({
            message: "error"
        });

    }


}

module.exports = verifytoken;