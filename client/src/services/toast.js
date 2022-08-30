/* eslint-disable import/no-anonymous-default-export */
import { toast } from "react-toastify";

const showError = (msg) => toast.error(msg, { delay: 100 });

export default {
  showError,
};
