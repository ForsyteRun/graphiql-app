export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export type FieldName = 'email' | 'password' | 'confirmPassword';
