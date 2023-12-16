import {
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import { Role } from './enum';

import {
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import { Role } from './enum';

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

export type DevelopersData = {
  name: string;
  image: string;
  role: Role;
  github: string;
  about: string;
  contribution: string[];
};

export const getTemplateString = <T extends string>(
  key: T
): `GraphQL ${T} type` => `GraphQL ${key} type`;

type GetFieldsType =
  | GraphQLInterfaceType
  | GraphQLObjectType
  | GraphQLInputObjectType;

export const isGetFieldsType = (
  value: GraphQLNamedType | GraphQLField<object, object>
): value is GetFieldsType => {
  return (
    value instanceof GraphQLInterfaceType ||
    value instanceof GraphQLObjectType ||
    value instanceof GraphQLInputObjectType
  );
};
