import React, { useEffect, useState } from 'react'
import { useConversation } from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const token = localStorage.getItem("chatToken");
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://jubilant-umbrella-q57gjjj7r7qh94qq-3000.app.github.dev/api/v1/message/${selectedConversation._id}`, {
                    method: "GET",
                    credentials: 'include',
                    headers: { "Content-Type": "application/json", "Authorization": token},
                })
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])

    return { messages, loading };
}

export default useGetMessages