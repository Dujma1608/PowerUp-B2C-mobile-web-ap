export interface User {
  username: string;
  email: string;
  token: string;
}

export interface UserFormValues {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}
