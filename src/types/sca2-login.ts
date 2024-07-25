import { Sca2Usuario } from "./sca2-usuario";

export type Sca2Login = {
  sessionToken: string;
  service: string;
  usuario: Sca2Usuario;
};
