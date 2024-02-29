import jwt from "jsonwebtoken";

export const generateToken = async (user, res) => {
    const token = jwt.sign({
        data: user
    }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRE_IN });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}