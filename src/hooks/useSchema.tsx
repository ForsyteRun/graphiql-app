import { GraphQLNamedType, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { useEffect, useState } from 'react';

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootTypes, setRootTypes] = useState<Maybe<GraphQLObjectType>>(null);
  const [fieldsTypes, setFieldsTypes] =
    useState<Maybe<ObjMap<GraphQLNamedType>>>();

  useEffect(() => {
    if (schema) {
      const mainTypes = schema.getQueryType();
      const fieldsTypes = schema.getTypeMap();

      setRootTypes(mainTypes);
      setFieldsTypes(fieldsTypes);
    }
  }, [schema]);

  return { rootTypes, fieldsTypes, setSchema };
};

export default useSchema;
