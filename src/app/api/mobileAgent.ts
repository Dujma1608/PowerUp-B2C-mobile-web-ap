import axios, { AxiosResponse } from "axios";
import {
  ResetPassword,
  User,
  UserFormValues,
  VerifyUser,
} from "../models/user";
import { store } from "../stores/store";
import { Charger } from "../models/charger";
import {
  Profile,
  ProfileNameForm,
  ProfilePasswordForm,
} from "../models/profile";
import { SessionHistory } from "../models/session";
import { ChargerData, QRConnector } from "../models/connector";

axios.defaults.baseURL = "https://api-test.power-up.green/api/B2C";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;
  if (token && config.headers) config.headers.Authorization = `bearer ${token}`;
  return config;
});

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  // current: () => requests.get<User>("/Auth/LoginUser"),
  login: (user: UserFormValues) => requests.post<User>("/Auth/LoginUser", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/Auth/RegisterUser", user),
  verifyUser: (body: VerifyUser) =>
    requests.post("/Auth/VerifyUserEmail", body),
  forgotPassword: (body: { email: string; companyId: 1 }) =>
    requests.post("/Auth/ForgotPassword", body),
  resetPassword: (body: ResetPassword) =>
    requests.post("/Auth/ResetPassword", body),
};

const Chargers = {
  list: () => requests.get<Charger[]>("/Chargers/GetChargerInfos"),
};

const Profiles = {
  userInfo: () => requests.get<User>("/Users/GetUserInfo"),
  updateName: (profileName: ProfileNameForm) =>
    requests.post<Profile>("/Users/UpdateUsersName ", profileName),
  updatePassword: (profilePassword: ProfilePasswordForm) =>
    requests.post("/Users/ChangePassword", profilePassword),
};

const Connectors = {
  getByQr: (qrData: string) =>
    requests.get<QRConnector>(`/Connectors/GetConnectorByQr?qr=${qrData}`),
  getByChargerId: (id: number) =>
    requests.get<ChargerData[]>(`/Connectors/GetConnectorsByChargerId/${id}`),
};

const Session = {
  getHistory: () =>
    requests.get<SessionHistory[]>("/Sessions/GetSessionHistory"),
  create: (connectorId: number) =>
    requests.post("/Sessions/CreateSession", { connectorId: connectorId }),
  stop: (id: number) =>
    requests.post<void>(`Sessions/StopSessionById/${id}`, {}),
};
const agent = {
  Account,
  Chargers,
  Profiles,
  Session,
  Connectors,
};

export default agent;
