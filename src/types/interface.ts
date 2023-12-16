import {
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
  IntrospectionQuery,
} from 'graphql';
import { ObjMap } from 'graphql/jsutils/ObjMap';

export interface IRootSchema {
  queries?: IQueries;
  fields:
    | ObjMap<GraphQLNamedType>
    | GraphQLInputFieldMap
    | GraphQLFieldMap<unknown, unknown>;
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
