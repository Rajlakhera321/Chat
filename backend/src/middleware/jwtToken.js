import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // console.log(req,"reqested cookie")
        if (!token) {
            return res.status(401).json({ message: "No Token Provided" });
        }
        const { data } = jwt.verify(token, process.env.SECRET_KEY);
        req.userData = data;
        // console.log(req.userData,"sfsdfasf");
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Invalid token" });
    }
}