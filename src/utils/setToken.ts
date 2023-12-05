import axios from "axios";

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Token = token;
}

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Token = "";
}
