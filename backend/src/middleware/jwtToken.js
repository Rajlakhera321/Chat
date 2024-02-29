import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({message: "No Token Provided"});
        }
        const {data} = await jwt.verify(token, process.env.SECRET_KEY);
        req.userData = data;
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Invalid token"});
    }
}