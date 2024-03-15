import React, { useState } from 'react';
import { useConversation } from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const [getMessage,setGetMessage] = useState([]);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`https://ominous-guacamole-r54vqqq49x4cxpvg-3000.app.github.dev/api/v1/message/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            })

            const data = await res.json();
            if (data.error) throw new Error(data.error);
            // console.log([...messages.message,data])
            setMessages([...messages.message,data]);
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading };
};

export default useSendMessages;
