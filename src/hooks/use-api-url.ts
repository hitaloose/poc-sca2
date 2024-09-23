import { useLocalStorage } from "usehooks-ts";
import { API_URL_PERSIST_KEY, API_URLS } from "../utils/constants";

export const useApiUrl = () => {
  const [apiUrl, setApiUrl] = useLocalStorage<string>(
    API_URL_PERSIST_KEY,
    API_URLS[0]
  );

  return { apiUrl, setApiUrl };
};
