import { isAxiosError } from "axios";

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data?.detail?.message ||
      "Api retornou um erro desconhecido"
    );
  }
  if (error instanceof Error) {
    return error.message;
  }

  return "Ocorreu um erro desconhecido";
};
