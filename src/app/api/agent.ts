import axios, { AxiosResponse } from "axios";
import { User, UserFormValues } from "../models/user";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  current: () => requests.get<User>("/user"),
  login: (user: UserFormValues) => requests.post<User>("/user/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/user/register", user),
};

const agent = {
  Account,
};

export default agent;
