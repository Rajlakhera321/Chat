import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const token = localStorage.getItem("chatToken");
    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://jubilant-umbrella-q57gjjj7r7qh94qq-3000.app.github.dev/api/v1/auth/logout", {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json", "Authorization": token},
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null)
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { logout, loading };
}