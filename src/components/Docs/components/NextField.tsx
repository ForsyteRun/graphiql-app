import {
  GraphQLArgument,
  GraphQLList,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactNode, useCallback } from 'react';
import { INextField } from '../types/interfaces';
import getArgsTypes from '../utils/getArgsTypes';

const NextField = ({ fieldName, fieldType, handleClick }: INextField) => {
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
    (typeValue: GraphQLOutputType) => {
      const getArgsTypes = (type: GraphQLInputType): ReactNode => {
        if ('name' in type) {
          return (
            <span style={{ color: 'blue', cursor: 'pointer' }}>
              :{type.name}
            </span>
          );
        } else if ('ofType' in type) {
          return getArgsTypes(type.ofType);
        } else {
          return null;
        }
      };

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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {renderField(fieldName, fieldType)}
        {renderArgs(fieldType)}
        {renderType(fieldType)}
      </div>
      <p>{(fieldType as GraphQLObjectType)?.description as Maybe<string>}</p>
    </>
  );
};

export default NextField;
