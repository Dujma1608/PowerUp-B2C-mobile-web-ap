import { makeAutoObservable, reaction } from "mobx";
import { Tk } from "react-flags-select";

export default class CommonStore {
  // token: string | null = localStorage.getItem("jwt");
  token: string | null | undefined = null;
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    // reaction(
    //   () => this.token,
    //   (token) => {
    //     if (token) {
    //       localStorage.setItem("jwt", token);
    //     } else {
    //       localStorage.removeItem("jwt");
    //     }
    //   }
    // );
  }
  setToken = (token: string | null) => {
    if (token) localStorage.setItem("jwt", token);
    this.token = token;
  };

  // setToken = (token: string | null) => {
  //   this.token = token;
  // };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}
