import {
  GraphQLFieldMap,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema,
} from 'graphql';
import { useEffect, useState } from 'react';

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

export type FieldsType = Record<string, GraphQLOutputType>;
export type Maybe<T> = undefined | T;

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootSchema, setRootSchema] = useState<Maybe<IRootSchema>>();

  useEffect(() => {
    if (schema) {
      const queryType = schema.getQueryType()!;
      const namedTypes = schema.getTypeMap();

      const filteredNamedTypes = Object.fromEntries(
        Object.entries(namedTypes).filter(([key]) => !key.includes('_'))
      );

      const rootSchema: IRootSchema = {
        queries: {
          name: queryType.name,
          description: queryType.description,
          fields: queryType.getFields(),
        },
        fields: filteredNamedTypes as FieldsType,
      };

      setRootSchema(rootSchema);
    }
  }, [schema]);

  return {
    rootSchema,
    setSchema,
    setRootSchema,
  };
};

export default useSchema;
