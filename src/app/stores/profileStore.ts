import { makeAutoObservable, runInAction } from "mobx";
import {
  Profile,
  ProfileNameForm,
  ProfilePasswordForm,
} from "../models/profile";
import agent from "../api/mobileAgent";

export default class ProfileStore {
  profile: Profile | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = async () => {
    try {
      const profile = await agent.Profiles.userInfo();
      runInAction(() => {
        this.profile = profile;
      });
    } catch (error) {
      console.log(error);
    }
  };
  updateUserName = async (profile: ProfileNameForm) => {
    try {
      await agent.Profiles.updateName(profile);
      runInAction(() => {
        if (this.profile) {
          this.profile.firstName = profile.firstName ?? this.profile.firstName;
          this.profile.lastName = profile.lastName ?? this.profile.lastName;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  updatePassword = async (profile: ProfilePasswordForm) => {
    try {
      const newProfile = await agent.Profiles.updatePassword(profile);
      runInAction(() => {
        this.profile = newProfile;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
