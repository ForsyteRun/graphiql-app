import { GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useEffect, useState } from 'react';
import { IRootSchema } from '../types/interface';
import { FieldsType } from '../types/types';

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

  console.log(rootSchema);

  return {
    rootSchema,
    setSchema,
    setRootSchema,
  };
};

export default useSchema;
