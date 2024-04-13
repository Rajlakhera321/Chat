import userModel from "../model/user.js";
import { generateToken } from "../middleware/generateToken.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password doesn't match" });
        }
        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "username already exists. Try using other username" });
        }

        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt);
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const data = await userModel.create({
            fullName,
            username,
            password: hasedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfile : girlProfile
        });
        const token = generateToken(data._id);

        await res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite: "strict", // CSRF attacks cross-site request forgery attacks
            secure: true,
        });
        
        return res.status(201).json({
            token,
            user
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        const token = await generateToken(user._id);

        res.cookie('jwt', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        });


        return res.status(200).json({
            token,
            user
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Password doesn't match" });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0});
        return res.status(200).json({message: "Logged out success"});
    } catch (error) {
        return res.status(400).json({ message: "Password doesn't match" });
    }
}