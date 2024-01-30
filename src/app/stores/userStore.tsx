import { User, UserFormValues } from "../models/user";

export default class UserStore {
  user: User | null = null;

  login = async (creds: UserFormValues) => {
    console.log(creds);
  };
}
