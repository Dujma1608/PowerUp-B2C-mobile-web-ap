import { createContext, useContext } from "react";
import UserStore from "./userStore";
import RegularStore from "./RegularStore";
import CommonStore from "./commonStore";
import ChargerStore from "./chargerStore";
import ProfileStore from "./profileStore";
import SessionStore from "./sessionStore";
import ConnectorStore from "./connectorStore";
import LocationStore from "./locationStore";

interface Store {
  userStore: UserStore;
  regularStore: RegularStore;
  commonStore: CommonStore;
  chargerStore: ChargerStore;
  profileStore: ProfileStore;
  sessionStore: SessionStore;
  connectorStore: ConnectorStore;
  locationStore: LocationStore;
}

export const store: Store = {
  userStore: new UserStore(),
  regularStore: new RegularStore(),
  commonStore: new CommonStore(),
  chargerStore: new ChargerStore(),
  profileStore: new ProfileStore(),
  sessionStore: new SessionStore(),
  connectorStore: new ConnectorStore(),
  locationStore: new LocationStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
