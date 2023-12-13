import { GraphQLNamedType, GraphQLOutputType, GraphQLType } from 'graphql';
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
    (typeValue: GraphQLOutputType) =>
      'type' in typeValue && typeValue.type ? (
        <span
          style={{ color: 'blue' }}
          onClick={() => {
            handleClick(typeValue.type as GraphQLNamedType);
          }}
        >
          :{(typeValue.type as GraphQLNamedType).name}
        </span>
      ) : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldType]
  );

  return (
    <>
      {renderField(fieldName, fieldType)}
      {renderType(fieldType)}
    </>
  );
};

export default NextField;
