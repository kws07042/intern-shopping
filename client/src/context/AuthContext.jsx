import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext();

export const useAccount = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('AuthContext is not found');
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        // 쿠키에서 토큰을 가져옴
        const token = getCookies('token');

        // 토큰이 있으면 상태를 업데이트
        if (token) {
            setAccount({ token: token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ account, setAccount }}>
            {children}
        </AuthContext.Provider>
    );
}

// 쿠키에서 토큰을 가져오는 함수
function getCookies(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}