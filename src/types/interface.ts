import { ObjMap } from 'graphql/jsutils/ObjMap';
import {
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
  IntrospectionQuery,
} from 'graphql';

export type RootFieldType =
  | ObjMap<GraphQLNamedType>
  | GraphQLInputFieldMap
  | GraphQLFieldMap<unknown, unknown>;

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
