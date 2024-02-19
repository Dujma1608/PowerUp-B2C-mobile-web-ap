import { createContext, useContext } from "react";
import UserStore from "./userStore";
import RegularStore from "./RegularStore";

interface Store {
  userStore: UserStore;
  regularStore: RegularStore;
}

export const store: Store = {
  userStore: new UserStore(),
  regularStore: new RegularStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
