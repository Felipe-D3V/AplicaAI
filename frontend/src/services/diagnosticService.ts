import { api } from "./api";
import type { Diagnostic } from "../types/Diagnostic";

export const getDiagnostic = async (): Promise<Diagnostic> => {

    const response = await api.get<Diagnostic>("/diagnostic");

    return response.data;
};