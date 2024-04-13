import React, { useState } from 'react';
import { useConversation } from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const token = localStorage.getItem("chatToken");
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`https://jubilant-umbrella-q57gjjj7r7qh94qq-3000.app.github.dev/api/v1/message/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json", "Authorization": token},
                body: JSON.stringify({ message }),
            })

            const data = await res.json();
            if (data.error) throw new Error(data.error);
            const updatedMessages = [...messages.message, data];
            setMessages({ ...messages, message: updatedMessages });
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading };
};

export default useSendMessages;
