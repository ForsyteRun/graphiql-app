import { Maybe } from 'graphql/jsutils/Maybe';
import { GraphQLField, GraphQLOutputType, GraphQLType } from 'graphql';
import { IRootSchema } from '../../../types/interface';

export interface IFieldSchema {
  schema: Maybe<IRootSchema>;
  setRootSchema: (value: IRootSchema) => void;
}

export interface INextField {
  handleClick: (value: GraphQLType) => void;
  fieldName: string;
  fieldType: GraphQLOutputType | GraphQLField<unknown, unknown>;
}
