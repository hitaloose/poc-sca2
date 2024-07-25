import axios from "axios";
import { API_URL, SERVICE_URLS } from "./constants";
import { Sca2LoginResponse } from "../types/sca2-login-response";
import { Services } from "./services";

export const apiClient = axios.create({ baseURL: API_URL });

export const login = async (ticket: string, service: Services) => {
  const loginUrls: Record<Services, string> = {
    [Services.SIEMA]: "/auth/login/sca2/siema",
    [Services.SIEMA_COMUNICADO]: "/auth/login/sca2/comunicados",
  };

  const { data } = await apiClient.post<Sca2LoginResponse>(loginUrls[service], {
    ticket,
    service: SERVICE_URLS[service],
  });

  return data.data;
};
