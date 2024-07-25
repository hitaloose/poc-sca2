import { Sca2Role } from "./sca2-role";

export type Sca2Usuario = {
  id: null;
  login: string;
  nome: string;
  numPessoa: number;
  email: string;
  ativo: boolean;
  usuarioInterno: boolean;
  perfilUnidadesVinculadas: {
    lstPerfilUnidades: [];
  }; // TODO: descobrir tipagem de unidade
  roles: Sca2Role[];
  isRoleSuprimidaPorLoginSemCertificado: boolean;
  loginVia: string; // TODO: descobrir valores para criar enum
  emissorCertificadoSerpro: boolean;
  tipoFuncionario: string;
  podeAcessarSistema: boolean;
  autenticacaoMultifator: boolean;
  loginViaCertificado: boolean;
};
