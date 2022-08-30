import axios from "axios";
import config from "config.json";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
};

const client = axios.create({ baseURL: config.routes.server.baseUrl, headers });

export default client;
