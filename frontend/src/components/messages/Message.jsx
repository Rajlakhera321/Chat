import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import { useConversation } from "../../zustand/useConversation";

export const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser.id;
    const fromattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic}/>
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.messageContent}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{fromattedTime}</div>
        </div>
    )
}