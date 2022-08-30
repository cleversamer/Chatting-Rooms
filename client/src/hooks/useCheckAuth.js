import { useEffect, useState } from "react";
import auth from "api/auth";

const useCheckAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth
      .isAuth()
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return user;
};

export default useCheckAuth;
