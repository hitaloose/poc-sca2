import { useCallback, useState } from "react";

import { redirectToSca2Login } from "../../utils/redirect-to-sca2-login";
import { useUser } from "../../hooks/use-user";

import "./styles.css";
import { Services } from "../../utils/services";
import { logout } from "../../utils/api-client";
import { handleError } from "../../utils/handle-error";

export const Home = () => {
  const { user, removeUser } = useUser();

  const [loading, setLoading] = useState(false);

  const handleSiemaLoginClick = useCallback(async () => {
    redirectToSca2Login(Services.SIEMA);
  }, []);

  const handleSiemaComunicadoLoginClick = useCallback(async () => {
    redirectToSca2Login(Services.SIEMA_COMUNICADO);
  }, []);

  const handleTucandeiraLoginClick = useCallback(async () => {
    redirectToSca2Login(Services.TUCANDEIRA);
  }, []);

  const handleLogoutClick = useCallback(async () => {
    try {
      setLoading(true);

      await logout();
      removeUser();
    } catch (error) {
      alert(handleError(error));
    } finally {
      setLoading(false);
    }
  }, [removeUser]);

  return (
    <>
      {loading && <h4>Carregando...</h4>}
      <h4>POC SCA2</h4>

      <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        {!user && (
          <>
            <button onClick={handleSiemaLoginClick}>Logar (SIEMA)</button>
            <button onClick={handleSiemaComunicadoLoginClick}>
              Logar (SIEMA COMUNICADO)
            </button>
            <button onClick={handleTucandeiraLoginClick}>
              Logar (TUCANDEIRA)
            </button>
          </>
        )}

        {!!user && <button onClick={handleLogoutClick}>Sair</button>}
      </div>

      {!!user && (
        <div style={{ maxHeight: "200px", overflow: "scroll" }}>
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};
