import { User } from "./user";

export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export class Profile implements IProfile {
  constructor(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  firstName: string;
  lastName: string;
  email: string;
}
export interface ProfileNameForm {
  firstName?: string;
  lastName?: string;
}

export interface ProfilePasswordForm {
  oldPassword?: string;
  newPassword?: string;
  newPasswordRepeated?: string;
}
