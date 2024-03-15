import { useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessages from "../../hooks/useSendMessages";

export const MessageInput = () => {
    const [messages, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessages();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!messages) return;
        else await sendMessage(messages);
        setMessage("");
    }
    return (
        <form className="mx-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="Send a message" 
                value={messages} 
                onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
                </button>
            </div>
        </form>
    )
}