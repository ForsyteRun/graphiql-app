import { GraphQLNamedType, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { useEffect, useState } from 'react';

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootTypes, setRootTypes] = useState<GraphQLObjectType | null>(null);
  const [fieldsTypes, setFieldsTypes] =
    useState<ObjMap<GraphQLNamedType> | null>(null);

  const [isRootSchema, setIsRootSchema] = useState<boolean>(false);

  const getMatchField = (
    globalFields: ObjMap<GraphQLNamedType> | null | undefined,
    field: ObjMap<GraphQLNamedType> | null
    // deep = 0
  ) => {
    if (!globalFields || !field) {
      return;
    }

    const rootState = Object.is(globalFields, field);

    setIsRootSchema(rootState);

    if (rootState) {
      return;
    }

    for (const key in globalFields) {
      if (Object.is(globalFields[key], field[key])) {
      }
    }
  };

  useEffect(() => {
    if (schema) {
      const mainTypes = schema.getQueryType()!;
      const fieldsTypes = schema.getTypeMap()!;

      setRootTypes(mainTypes);
      setFieldsTypes(fieldsTypes);
    }
  }, [schema]);

  useEffect(() => {
    const mainTypes = schema && schema.getTypeMap()!;

    getMatchField(mainTypes, fieldsTypes);
  }, [fieldsTypes, schema]);

  return {
    rootTypes,
    isRootSchema,
    fieldsTypes,
    setSchema,
    setRootTypes,
    setFieldsTypes,
  };
};

export default useSchema;
