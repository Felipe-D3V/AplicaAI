import { api } from "./api";
import type { Statistic } from "../types/Statistic";

export const getStatistics = async (): Promise<Statistic> => {

    const response = await api.get<Statistic>("/statistics");

    return response.data;
};