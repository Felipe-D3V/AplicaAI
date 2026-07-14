import { api } from "./api";
import type { StudyPlan } from "../types/StudyPlan";

export const getStudyPlan = async (): Promise<StudyPlan[]> => {

    const response = await api.get<StudyPlan[]>("/study-plan");

    return response.data;
};