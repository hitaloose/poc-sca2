import axios from "axios";
import { URL_SCA_2 } from "./constants";

export const sca2Client = axios.create({
  baseURL: `${URL_SCA_2}/sca2sessao/api/v1/`,
});

export const obterUsuario = async (token: string) => {
  const { data } = await sca2Client.get("/sessao/usuario", {
    headers: {
      Authorization: `bearer ${token}`,
      "X-XSRF-TOKEN": "b3773f07-fcc2-4053-a931-b5d0fbc7f64c",
    },
  });

  return data;
};
