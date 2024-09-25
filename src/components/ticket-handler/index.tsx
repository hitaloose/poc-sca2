import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { redirectToSca2Login } from "../../utils/redirect-to-sca2-login";
import { useUser } from "../../hooks/use-user";
import { Services } from "../../utils/services";
import { handleError } from "../../utils/handle-error";
import { useApi } from "../../hooks/use-api";

export const TicketHandler = ({ service }: { service: Services }) => {
  const navigate = useNavigate();
  const { login } = useApi();

  const { user, setUser } = useUser();

  const handleTicket = useCallback(
    async (ticket: string) => {
      try {
        const data = await login(ticket, service);

        setUser(data);
      } catch (error) {
        alert(handleError(error));

        navigate("/poc-sca2");
      }
    },
    [login, navigate, service, setUser]
  );

  const handleDidMont = useCallback(async () => {
    if (user) {
      navigate("/");
      return;
    }

    const urlParams = new URLSearchParams(document.location.search);
    const ticket = urlParams.get("ticket");

    if (!ticket) {
      redirectToSca2Login(service);
      return;
    }

    await handleTicket(ticket);
  }, [handleTicket, navigate, service, user]);

  useEffect(() => {
    handleDidMont();
  }, [handleDidMont]);

  return <h4>Carregando...</h4>;
};
