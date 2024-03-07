import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {
  ResetPassword,
  User,
  UserFormValues,
  VerifyUser,
} from "../models/user";
import { store } from "./store";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    const user = await agent.Account.login(creds);
    store.commonStore.setToken(user.token);
    runInAction(() => (this.user = user));
  };

  register = async (creds: UserFormValues) => {
    const user = await agent.Account.register(creds);
    runInAction(() => (this.user = user));
    console.log("Registered");
  };
  verifyUser = async (creds: VerifyUser) => {
    const result = await agent.Account.verifyUser(creds);
    store.commonStore.setToken(result.token);
  };

  sendActivationCode = async (email: string) => {
    try {
      return agent.Account.forgotPassword({ email, companyId: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  resetPassword = async (form: ResetPassword) => {
    try {
      const result = await agent.Account.resetPassword(form);
      // runInAction(() => this.user.id = result.userId);
      store.commonStore.setToken(result.token);
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    localStorage.removeItem("jwt");
    this.user = null;
  };
}
