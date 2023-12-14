import {
  GraphQLArgument,
  GraphQLList,
  GraphQLNamedType,
  GraphQLOutputType,
} from 'graphql';
import { ReactNode, useCallback } from 'react';
import getArgsTypes from '../utils/getArgsTypes';
import { INextField } from '../types/interfaces';

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

  const getNameFromTypeList = (
    obj: GraphQLNamedType | GraphQLList<GraphQLOutputType>
  ): ReactNode => {
    if ('name' in obj) {
      return (
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => {
            handleClick(obj);
          }}
        >
          {obj.name}
        </span>
      );
    } else if ('ofType' in obj) {
      return getNameFromTypeList(obj.ofType);
    } else {
      return null;
    }
  };

  const renderType = useCallback(
    (typeValue: GraphQLOutputType) => {
      if ('type' in typeValue && typeValue.type) {
        return <>{getNameFromTypeList(typeValue.type as GraphQLNamedType)}</>;
      }
      return null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldType]
  );

  const renderArgs = useCallback(
    (typeValue: GraphQLOutputType) => {
      if ('args' in typeValue && typeValue.args instanceof Array) {
        const lastArg = (typeValue.args as GraphQLArgument[]).length - 1;
        const isManyArgs = (typeValue.args as GraphQLArgument[]).length > 1;

        return (
          <>
            {typeValue.args.map((arg: GraphQLArgument, index: number) => (
              <span key={arg.name}>
                {index === 0 && '('}
                {arg.name}
                {getArgsTypes(arg.type, handleClick)}
                {isManyArgs && index !== lastArg && ','}
                {index === lastArg && ')'}
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
