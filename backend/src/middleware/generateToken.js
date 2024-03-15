import jwt from "jsonwebtoken";

export const generateToken = async (user, res) => {
    const token = jwt.sign({
        data: user
    }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRE_IN });
    await res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true, // Allow client-side access to the cookie
        sameSite: 'None', // Ensure the cookie is only sent for same-site requests
        secure: true,
    });
    console.log(await res,"sdfasd");
}