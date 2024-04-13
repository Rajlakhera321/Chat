import jwt from "jsonwebtoken";
import user from "../model/user.js";

export const verifyToken = async (req, res, next) => {
    try {
        
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "No Token Provided" });
        }

        // const cookieName = `jwt_${req.userData}`;
        // console.log(cookieName)
        // // Retrieve token from the user-specific cookie
        // const userToken = req.cookies[cookieName];

        // if (!userToken) {
        //     return res.status(401).json({ message: "No Token Found for User" });
        // }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}
		const userDetail = await user.findById(decoded.data).select("-password");

		if (!userDetail) {
			return res.status(404).json({ error: "User not found" });
		}

        req.userData = userDetail;
        next()
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
}