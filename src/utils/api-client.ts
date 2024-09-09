import axios from "axios";
import { API_URL, SERVICE_URLS, USER_PERSIST_KEY } from "./constants";
import { Sca2LoginResponse } from "../types/sca2-login-response";
import { Services } from "./services";

export const apiClient = axios.create({ baseURL: API_URL });

apiClient.interceptors.request.use((config) => {
  const userData = localStorage.getItem(USER_PERSIST_KEY);

  if (userData) {
    const user = JSON.parse(userData);

    config.headers.Authorization = `bearer ${user.sessionToken}`;
  }

  return config;
});

export const login = async (ticket: string, service: Services) => {
  const loginUrls: Record<Services, string> = {
    [Services.SIEMA]: "/auth/login/sca2/siema",
    [Services.SIEMA_COMUNICADO]: "/auth/login/sca2/comunicados",
    [Services.TUCANDEIRA]: "/auth/login",
  };

  const { data } = await apiClient.post<Sca2LoginResponse>(loginUrls[service], {
    ticket,
    service: SERVICE_URLS[service],
  });

  return data.data;
};

export const logout = async () => {
  await apiClient.post("/auth/logout");
};
