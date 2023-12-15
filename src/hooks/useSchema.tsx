import { GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useEffect, useState } from 'react';
import { IRootSchema } from '../types/interface';
import { FieldsType } from '../types/types';
import fillDescriptionFieldSchema from '../utils/fillDescriptionFieldSchema';

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootSchema, setRootSchema] = useState<Maybe<IRootSchema>>();

  useEffect(() => {
    if (schema) {
      const queryType = schema.getQueryType()!;
      const namedTypes = schema.getTypeMap();

      const filteredByNameTypes = Object.fromEntries(
        Object.entries(namedTypes).filter(([key]) => !key.includes('_'))
      );

      const modifyRootSchema: IRootSchema = {
        queries: {
          name: queryType.name,
          description: queryType.description,
          fields: queryType.getFields(),
        },
        fields: fillDescriptionFieldSchema(filteredByNameTypes as FieldsType),
      };

      setRootSchema(modifyRootSchema);
    }
  }, [schema]);

  return {
    rootSchema,
    setSchema,
    setRootSchema,
  };
};

export default useSchema;
