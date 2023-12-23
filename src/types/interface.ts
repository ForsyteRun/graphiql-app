import {
  GraphQLFieldMap,
  GraphQLObjectType,
  GraphQLOutputType,
  IntrospectionQuery,
} from 'graphql';
import { RootFieldType } from './types';

export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface IRootSchema {
  queries?: IQueries;
  fields: RootFieldType;
  types?: GraphQLOutputType;
}

export interface IQueries {
  name: GraphQLObjectType['name'];
  description: GraphQLObjectType['description'];
  fields: GraphQLFieldMap<object, object>;
}

export interface IQuery {
  data: IntrospectionQuery | null;
}

export interface EditorSectionProps {
  title: string;
}

export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface DataType {
  api: string;
  query: string;
  variables: string;
  response: string;
  headers: object;
  info: string;
}

export interface User {
  isAuth: boolean;
}
