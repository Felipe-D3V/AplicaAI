import {
    createContext,
    useContext,
    useState,
} from "react";
import type { ReactNode } from "react";

import type { User } from "../types/User";

interface AuthContextType {

    user: User | null;

    login: (user: User) => void;

    logout: () => void;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export function AuthProvider({
    children
}: Props) {

    const [user, setUser] = useState<User | null>(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
        return JSON.parse(storedUser);
    }

    return null;

});

    function login(user: User) {

        localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    setUser(user);

    }

    function logout() {

        localStorage.removeItem("user");
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

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth deve ser usado dentro de AuthProvider"
        );

    }

    return context;

}