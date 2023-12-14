import {
  GraphQLArgument,
  GraphQLNamedType,
  GraphQLOutputType,
  GraphQLType,
} from 'graphql';
import { useCallback } from 'react';

interface INextField {
  handleClick: (value: GraphQLType) => void;
  fieldName: string;
  fieldType: GraphQLOutputType;
}

const NextField = ({ fieldName, fieldType, handleClick }: INextField) => {
  const renderField = useCallback(
    (nameValue: string, typeValue: GraphQLOutputType) => (
      <span
        onClick={() => {
          handleClick(typeValue);
        }}
      >
        {nameValue}
      </span>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldName, fieldType]
  );

  const renderType = useCallback(
    (typeValue: GraphQLOutputType) => {
      if ('type' in typeValue && typeValue.type) {
        return (
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              handleClick(typeValue.type as GraphQLNamedType);
            }}
          >
            :{(typeValue.type as GraphQLNamedType).name}
          </span>
        );
      }
      return null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldType]
  );
  const renderArgs = useCallback(
    (typeValue: GraphQLOutputType) => {
      if ('args' in typeValue && typeValue.args instanceof Array) {
        const isManyArgs = (typeValue.args as GraphQLArgument[]).length > 1;

        return (
          <>
            {typeValue.args.map((arg: GraphQLArgument, index: number) => (
              <span key={arg.name}>
                {index === 0 && '('}
                {arg.name}
                {isManyArgs &&
                  index !== (typeValue.args as GraphQLArgument[]).length - 1 &&
                  ','}
                {index === (typeValue.args as GraphQLArgument[]).length - 1 &&
                  ')'}
              </span>
            ))}
          </>
        );
      }

      return null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldType]
  );

  return (
    <>
      {renderField(fieldName, fieldType)}
      {renderArgs(fieldType)}
      {renderType(fieldType)}
    </>
  );
};

export default NextField;
