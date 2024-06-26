import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();


    const login = async (username, password) => {
        const success = handleInputErrors({ username, password });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("https://jubilant-umbrella-q57gjjj7r7qh94qq-3000.app.github.dev/api/v1/auth/login", {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            })
            const data = await res.json();
            
            if (data.error) throw new Error(data.error);
            
            localStorage.setItem("chat-user", JSON.stringify(data.user))
            localStorage.setItem("chatToken", JSON.stringify(data.token))
            setAuthUser(data.user);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error('Please fill all the fileds');
        return false;
    }

    return true;
}