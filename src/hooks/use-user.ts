import { useLocalStorage } from "usehooks-ts";

import { Sca2Login } from "../types/sca2-login";
import { USER_PERSIST_KEY } from "../utils/constants";

export const useUser = () => {
  const [user, setUser, removeUser] = useLocalStorage<null | Sca2Login>(
    USER_PERSIST_KEY,
    null
  );

  return { user, setUser, removeUser };
};
