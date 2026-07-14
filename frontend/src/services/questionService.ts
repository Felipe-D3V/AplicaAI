import { api } from "./api";
import type { Question } from "../types/Question";

export const getQuestions = async (): Promise<Question[]> => {

    const response = await api.get<Question[]>("/questions");

    return response.data;
};