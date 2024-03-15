import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://ominous-guacamole-r54vqqq49x4cxpvg-3000.app.github.dev/api/v1/user", {
          method: "GET",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
        })
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getConversation();
  }, [])

  return { loading, conversations }
}

export default useGetConversations