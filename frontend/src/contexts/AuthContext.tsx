import {
    createContext,
    useContext,
    useState,
} from "react";

import type { ReactNode } from "react";

import type { User } from "../types/User";

import api from "../api/api";

interface AuthContextType {

    user: User | null;

    login: (
        email: string,
        password: string
    ) => Promise<void>;

    logout: () => void;

}

const AuthContext =
    createContext<AuthContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export function AuthProvider({
    children
}: Props) {

    const [user, setUser] = useState<User | null>(() => {

        const storedUser =
            localStorage.getItem("user");

        if (storedUser) {
            return JSON.parse(storedUser);
        }

        return null;

    });


    async function login(
        email: string,
        password: string
    ) {

        const response = await api.post(
            "/auth/login",
            {
                email,
                password
            }
        );

        const user =
            response.data.data.user;

        const token =
            response.data.data.token;


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        localStorage.setItem(
            "token",
            token
        );


        setUser(user);

    }


    function logout() {

        localStorage.removeItem("user");

        localStorage.removeItem("token");

        setUser(null);

    }


    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


export function useAuth() {

    const context =
        useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth deve ser usado dentro de AuthProvider"
        );

    }

    return context;

}