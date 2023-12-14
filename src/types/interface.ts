import {
  GraphQLFieldMap,
  GraphQLObjectType,
  GraphQLOutputType,
  IntrospectionQuery,
} from 'graphql';
import { FieldsType } from './types';

export interface IRootSchema {
  queries?: IQueries;
  fields: FieldsType;
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
