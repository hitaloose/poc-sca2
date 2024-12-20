import { Services } from "./services";

export const URL_SSO_2 = "https://homlogin.sso2.ibama.serpro.gov.br";
export const URL_SCA_2 = "https://homsca2.ibama.serpro.gov.br";

const BASE_URL = "https://hitaloose.github.io/poc-sca2";
export const URL_SIEMA = `${BASE_URL}/siema-ticket-handler`;
export const URL_SIEMA_COMUNICADO = `${BASE_URL}/comunicados-ticket-handler`;
export const URL_TUCANDEIRA = `${BASE_URL}/tucandeira-ticket-handler`;

export const SERVICE_URLS: Record<Services, string> = {
  [Services.SIEMA]: URL_SIEMA,
  [Services.SIEMA_COMUNICADO]: URL_SIEMA_COMUNICADO,
  [Services.TUCANDEIRA]: URL_TUCANDEIRA,
};

export const API_URLS = [
  "http://localhost:4000/api/v1",
  "https://codex-recrutamento-api-develop.up.railway.app/api/v1",
  "https://tucandeira-backend.dev.ibama.gov.br/api/v1",
  "https://tucandeira-backend.hom.ibama.gov.br/api/v1",
];

export const USER_PERSIST_KEY = "@USER";
export const API_URL_PERSIST_KEY = "@API_URL";
