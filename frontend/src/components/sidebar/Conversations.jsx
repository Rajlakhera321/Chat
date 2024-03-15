import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
import { Conversation } from "./Conversation"

export const Conversations = () => {

    const { loading, conversations } = useGetConversations();
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.message &&
                conversations.message.map((conversation, idx) => (
                    <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx= {idx === conversations.message.length - 1} />
                ))
            }
        </div>
    )
}