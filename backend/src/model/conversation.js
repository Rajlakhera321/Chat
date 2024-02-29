import { Schema, model } from "mongoose";

const conversationSchema = new Schema({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'message',
        default: []
    }]
}, { timestamps: true });

export default model("conversation", conversationSchema);