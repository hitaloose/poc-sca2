import { URL_SSO_2, SERVICE_URLS } from "./constants";
import { Services } from "./services";

export const redirectToSca2Login = async (service: Services) => {
  const URL_SISTEMA_COM_ENCODE = encodeURIComponent(SERVICE_URLS[service]);
  document.location = `${URL_SSO_2}/cas/login?service=${URL_SISTEMA_COM_ENCODE}`;
};
