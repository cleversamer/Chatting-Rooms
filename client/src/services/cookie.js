/* eslint-disable import/no-anonymous-default-export */
import Cookies from "js-cookie";

const tokenKey = "x-access-token";

const set = (value) => {
  Cookies.set(tokenKey, value);
};

const remove = () => {
  Cookies.remove(tokenKey);
};

const get = () => {
  return Cookies.get(tokenKey);
};

const getAuthHeader = () => {
  return { Authorization: `Bearer ${get()}` };
};

export default {
  set,
  remove,
  get,
  getAuthHeader,
};
