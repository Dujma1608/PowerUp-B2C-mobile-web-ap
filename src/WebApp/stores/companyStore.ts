import { makeAutoObservable, runInAction } from "mobx";
import { CompanyDetails } from "../models/company";
import webAgent from "../api/webAgent";

export default class CompanyStore {
  companyData: CompanyDetails | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCompanyMetadata = async () => {
    try {
      const data: CompanyDetails = await webAgent.Company.companyData();
      runInAction(() => (this.companyData = data));
    } catch (error) {
      console.log(error);
    }
  };
}
