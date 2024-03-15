import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://ominous-guacamole-r54vqqq49x4cxpvg-3000.app.github.dev/api/v1/auth/logout", {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" }
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