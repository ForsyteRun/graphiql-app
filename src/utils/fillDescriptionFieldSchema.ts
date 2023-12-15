import { GraphQLFieldMap } from 'graphql';
import { FieldsType } from '../types/types';

const getTemplateString = <T extends string>(key: T): `GraphQL ${T} type` =>
  `GraphQL ${key} type`;

const fillDescriptionFieldSchema = <
  T extends FieldsType | GraphQLFieldMap<object, object>,
>(
  fields: T
): T => {
  const data = Object.entries(fields);

  const updatedFields = data.map(([key, value]) => {
    if (!value.description.trim()) {
      value.description = getTemplateString(key);
    }

    if ('getFields' in value) {
      fillDescriptionFieldSchema(value.getFields());
    }

    return [key, value];
  });

  return Object.fromEntries(updatedFields);
};

export default fillDescriptionFieldSchema;
