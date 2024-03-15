import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName:{
        type: String
    },
    username:{
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String,
        enum:['male','female']
    },
    profilePic:{
        type: String,
        default: ""
    }
},{timestamps: true});

export default model('user',userSchema);