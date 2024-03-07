export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token?: string;
  roleName?: string;
}

export interface UserFormValues {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  repeatPassword?: string;
  companyId: number;
}

export interface VerifyUser {
  userId: number;
  activationCode: string;
}

export interface ResetPassword {
  email: string;
  companyId: number;
  activationCode: string;
  newPassword: string;
  newPasswordRepeated: string;
}
