import axios from "axios";
import { useUser } from "./use-user";
import { useApiUrl } from "./use-api-url";
import { Services } from "../utils/services";
import { Sca2LoginResponse } from "../types/sca2-login-response";
import { SERVICE_URLS } from "../utils/constants";
import { useCallback, useEffect } from "react";

const apiClient = axios.create();

export const useApi = () => {
  const { user } = useUser();
  const { apiUrl } = useApiUrl();

  const login = useCallback(async (ticket: string, service: Services) => {
    const loginUrls: Record<Services, string> = {
      [Services.SIEMA]: "auth/login/sca2/siema",
      [Services.SIEMA_COMUNICADO]: "auth/login/sca2/comunicados",
      [Services.TUCANDEIRA]: "auth/login",
    };

    const { data } = await apiClient.post<Sca2LoginResponse>(
      loginUrls[service],
      {
        ticket,
        service: SERVICE_URLS[service],
      }
    );

    return data.data!;
  }, []);

  const logout = useCallback(async () => {
    await apiClient.post("auth/logout");
  }, []);

  useEffect(() => {
    apiClient.interceptors.request.use((config) => {
      if (apiUrl) {
        config.baseURL = apiUrl;
      }

      if (user) {
        config.headers.Authorization = `bearer ${user.sessionToken}`;
      }

      return config;
    });
  }, [apiUrl, user]);

  return { login, logout };
};
