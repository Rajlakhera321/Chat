import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    messageContent: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model("message", messageSchema);