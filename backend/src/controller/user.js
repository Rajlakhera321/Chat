import userModel from "../model/user.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const {_id} = req.userData;
        
        const allUsers = await userModel.find({ _id: { $ne: _id } }).select('-password');
        
        return res.status(200).json({ message: allUsers });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}