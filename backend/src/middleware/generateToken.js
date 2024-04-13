import jwt from "jsonwebtoken";

export const generateToken = async (user) => {
    const token = jwt.sign({
        data: user
    }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRE_IN });
    
    return token;
}