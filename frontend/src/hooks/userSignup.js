import { useState } from "react";

export const userSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if(!success) return;
        
    }
}