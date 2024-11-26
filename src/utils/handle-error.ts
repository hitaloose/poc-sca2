import { isAxiosError } from "axios";

export const handleError = (error: unknown) => {
  console.log(error);

  if (isAxiosError(error)) {
    alert(JSON.stringify(error.response, null, 2));

    return error.response?.data?.detail?.message || "Api retornou um erro desconhecido";
  }
  if (error instanceof Error) {
    return error.message;
  }

  return "Ocorreu um erro desconhecido";
};
