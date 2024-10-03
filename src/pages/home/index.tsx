import { useCallback, useState } from "react";

import { redirectToSca2Login } from "../../utils/redirect-to-sca2-login";
import { useUser } from "../../hooks/use-user";

import "./styles.css";
import { Services } from "../../utils/services";
import { handleError } from "../../utils/handle-error";
import { API_URLS } from "../../utils/constants";
import { useApiUrl } from "../../hooks/use-api-url";
import { useApi } from "../../hooks/use-api";

export const Home = () => {
  const { user, removeUser } = useUser();
  const { apiUrl, setApiUrl } = useApiUrl();
  const { logout } = useApi();

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
    } catch (error) {
      alert(handleError(error));
    } finally {
      removeUser();
      setLoading(false);
    }
  }, [logout, removeUser]);

  const handleCopyTokenClick = useCallback(() => {
    if (!user) {
      return;
    }

    navigator.clipboard.writeText(user.sessionToken);
  }, [user]);

  return (
    <>
      {loading && <h4>Carregando...</h4>}
      <h4>Login SCA2</h4>

      <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        {!user && (
          <>
            <button onClick={handleSiemaLoginClick}>Logar (SIEMA)</button>
            <button onClick={handleSiemaComunicadoLoginClick}>Logar (SIEMA COMUNICADO)</button>
            <button onClick={handleTucandeiraLoginClick}>Logar (TUCANDEIRA)</button>
          </>
        )}

        {!!user && <button onClick={handleLogoutClick}>Sair</button>}
      </div>

      {!!user && (
        <div>
          <div style={{ display: "flex" }}>
            <button onClick={handleCopyTokenClick}>Copiar token</button>
          </div>
          <div style={{ maxHeight: "200px", overflow: "scroll" }}>
            <pre style={{ textAlign: "left" }}>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      )}

      <div className="api-wrapper">
        {API_URLS.map((url) => (
          <button data-selected={url === apiUrl} key={url} title={url} onClick={() => setApiUrl(url)}>
            {url}
          </button>
        ))}
      </div>
    </>
  );
};
