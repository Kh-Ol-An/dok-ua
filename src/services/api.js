import axios from "axios";

axios.defaults.baseURL = "https://doc.ua/";

export const fetchInDocUa = value => {
  const data = `?data=${value}`;
  return axios.get(data);
};

export const a = null;
