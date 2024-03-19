import axios, { AxiosResponse } from "axios";
import { CompanyDetails } from "../models/company";
import { QRConnector } from "../../app/models/connector";
import { store } from "../../app/stores/store";

axios.defaults.baseURL = "https://api-test.power-up.green/api/B2CWeb";

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

const Company = {
  getAppId: (connectorId: number) =>
    requests.get(`/Company/GetCompanyMobileAppLink?connectorId=${connectorId}`),
  companyData: () =>
    requests.get<CompanyDetails>("/Company/GetCompanyMetadata"),
};

const Connectors = {
  getByQr: (qrData: string) =>
    requests.get<QRConnector>(`/Connectors/GetConnectorByQr?qr=${qrData}`),
};

const Session = {
  create: (connectorId: number) =>
    requests.post("/Sessions/CreateSession", { connectorId: connectorId }),
  stop: (id: number) =>
    requests.post<void>(`Sessions/StopSessionById/${id}`, {}),
};

const webAgent = {
  Company,
  Session,
  Connectors,
};

export default webAgent;
