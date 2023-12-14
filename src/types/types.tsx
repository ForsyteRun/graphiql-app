import { GraphQLOutputType } from 'graphql';

export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export type FieldName = 'email' | 'password';

export type FieldsType = Record<string, GraphQLOutputType>;
export type Maybe<T> = undefined | T;
