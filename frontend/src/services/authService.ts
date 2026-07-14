import { api } from "./api";
import type { User } from "../types/User";

export const login = async (
    email: string,
    password: string
): Promise<User> => {

    const response = await api.post<User>("/auth/login", {
        email,
        password
    });

    return response.data;
};

export const register = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {

    const response = await api.post<User>("/auth/register", {
        name,
        email,
        password
    });

    return response.data;
};