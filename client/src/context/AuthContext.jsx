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
    const [account, setAccount] = useState(() => {
        const token = localStorage.getItem('token');    // 토큰을 로컬스토리지에서 가져옴
        return {
            token: token || null,
            isAuthenticating: !!token // 토큰이 있으면 인증 중으로 설정
        }
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setAccount({ token, isAuthenticating: true });
        else setAccount({ token: null, isAuthenticating: false });
    }, []);

    console.log(`AuthContext account: ${JSON.stringify(account)}`);

    const login = (token) => {
        localStorage.setItem('token', token);
        setAccount({ token, isAuthenticating: true });
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAccount({ token: null, isAuthenticating: false });
    }

    return (
        <AuthContext.Provider value={{ ...account, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}