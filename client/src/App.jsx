import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/notFound";
import config from "config.json";
import Navigation from "components/Navigation";
import Login from "pages/Login";
import Register from "pages/Register";
import Chat from "pages/Chat";

const routes = config.routes.client;

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path={routes.chat} element={<Chat />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path={routes.home} element={<Home />} />
        <Route path="/" element={<Navigate to={routes.home} replace />} />
        <Route path="*" element={<Navigate to={routes.notFound} replace />} />
      </Routes>
    </>
  );
};

export default App;
