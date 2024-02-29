import messageModel from "../model/message.js";
import conversationModel from "../model/conversation.js";

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.userData;
        let conversation = await conversationModel.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        
        if(!conversation){
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new messageModel({
            senderId,
            receiverId,
            messageContent: message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        return res.status(201).json(newMessage);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.userData;

        const conversation = await conversationModel.findOne({
            participants: {$all : [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation) return res.status(200).json({message: []})

        const message = conversation.messages

        return res.status(200).json({message: message})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}