import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useCheckAuth from "hooks/useCheckAuth";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login } from "store/user";
import { ToastContainer } from "react-toastify";

import Home from "pages/Home";
import NotFound from "pages/notFound";
import config from "config.json";
import Navigation from "components/Navigation";
import Login from "pages/Login";
import Register from "pages/Register";
import Chat from "pages/Chat";

const routes = config.routes.client;

const App = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useCheckAuth();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (authenticatedUser) {
      dispatch(login(user));
    }
  }, [authenticatedUser]);

  return (
    <>
      <Navigation />

      <Routes>
        {user && <Route path={routes.chat} element={<Chat />} />}

        {!user && (
          <>
            <Route path={routes.register} element={<Register />} />
            <Route path={routes.login} element={<Login />} />
          </>
        )}

        <Route path={routes.notFound} element={<NotFound />} />
        <Route
          path={routes.home}
          element={user ? <Navigate to={routes.chat} replace /> : <Home />}
        />
        <Route path="/" element={<Navigate to={routes.home} replace />} />
        <Route
          path="*"
          element={
            <Navigate to={user ? routes.chat : routes.notFound} replace />
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
