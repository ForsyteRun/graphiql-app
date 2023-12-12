import {
  GraphQLFieldMap,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { useEffect, useState } from 'react';

export interface IRootSchema {
  queries?: IQueries;
  fields: FieldsType;
}

interface IQueries {
  name: GraphQLObjectType['name'];
  description: GraphQLObjectType['description'];
  fields: GraphQLFieldMap<object, object>;
}

export type FieldsType = Record<string, GraphQLObjectType>;
export type Maybe<T> = undefined | T;

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootSchema, setRootSchema] = useState<Maybe<IRootSchema>>();

  const [fieldsTypes, setFieldsTypes] =
    useState<ObjMap<GraphQLNamedType> | null>(null);

  // const getMatchField = (
  //   globalFields: ObjMap<GraphQLNamedType> | null | undefined,
  //   field: ObjMap<GraphQLNamedType> | null
  //   // deep = 0
  // ) => {
  //   if (!globalFields || !field) {
  //     return;
  //   }

  //   const rootState = Object.is(globalFields, field);

  //   setIsRootSchema(rootState);

  //   if (rootState) {
  //     return;
  //   }

  //   for (const key in globalFields) {
  //     if (Object.is(globalFields[key], field[key])) {
  //     }
  //   }
  // };

  useEffect(() => {
    if (schema) {
      const queryType = schema.getQueryType()!;
      const namedTypes = schema.getTypeMap();

      const rootSchema: IRootSchema = {
        queries: {
          name: queryType.name,
          description: queryType.description,
          fields: queryType.getFields(),
        },
        fields: namedTypes as FieldsType,
      };
      //
      setRootSchema(rootSchema);
      // setFieldsTypes(namedTypes);
    }
  }, [schema]);

  // useEffect(() => {
  //   const mainTypes = schema && schema.getTypeMap()!;

  //   getMatchField(mainTypes, fieldsTypes);
  // }, [fieldsTypes, schema]);

  return {
    rootSchema,
    fieldsTypes,
    setSchema,
    setFieldsTypes,
    setRootSchema,
  };
};

export default useSchema;
