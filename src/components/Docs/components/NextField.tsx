import {
  GraphQLArgument,
  GraphQLField,
  GraphQLList,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactNode, memo, useCallback } from 'react';
import { INextField } from '../types/interfaces';
import getArgsTypes from '../utils/getArgsTypes';

const isGraphQLField = (
  value: GraphQLField<unknown, unknown>
): value is GraphQLField<unknown, unknown> => {
  return 'args' in value && value.args instanceof Array;
};

const NextField = memo(({ fieldName, fieldType, handleClick }: INextField) => {
  const renderField = useCallback(
    (nameValue: string, typeValue: GraphQLOutputType) => (
      <span
        style={{ color: 'orange' }}
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
        <>
          <div
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              handleClick(obj);
            }}
          >
            {obj.name}
          </div>
        </>
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
    (typeValue: GraphQLField<unknown, unknown>) => {
      if (isGraphQLField(typeValue)) {
        const lastArg = typeValue.args.length - 1;
        const isManyArgs = typeValue.args.length > 1;

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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {renderField(fieldName, fieldType as GraphQLOutputType)}
        {renderArgs(fieldType as GraphQLField<unknown, unknown>)}
        {renderType(fieldType as GraphQLOutputType)}
      </div>
      <p>{(fieldType as GraphQLObjectType)?.description as Maybe<string>}</p>
    </>
  );
});

export default NextField;
