import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import { Message } from "./Message"

export const Messages = () => {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 10)
    }, [messages])
    
    return (
        <>
            <div className="px-4 flex-1 overflow-auto">
                {!loading && messages && messages.message && messages.message.length > 0 && messages.message.map(message => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

                {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

                {!loading && messages.message && messages.message.length === 0 && (
                    <p className="text-center">Send a message to start the conversation</p>
                )}
            </div>
        </>
    )
}