/* eslint-disable import/no-anonymous-default-export */
import client from "./client";
import config from "config.json";
import cookie from "services/cookie";

const login = (email, password) =>
  client.post(config.routes.server.login, { email, password });

const register = (name, email, password) =>
  client.post(config.routes.server.register, { name, email, password });

const isAuth = () =>
  client.get(config.routes.server.isauth, { headers: cookie.getAuthHeader() });

export default {
  login,
  register,
  isAuth,
};
