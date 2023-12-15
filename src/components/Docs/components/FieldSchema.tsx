import {
  GraphQLLeafType,
  GraphQLNamedType,
  GraphQLOutputType,
  GraphQLType,
  isLeafType,
} from 'graphql/type';
import { memo, useCallback, useEffect, useState } from 'react';
import { IRootSchema } from '../../../types/interface';
import { FieldsType } from '../../../types/types';
import { IFieldSchema } from '../types/interfaces';
import DetailedField from './DetailedField';
import NextField from './NextField';

interface IHistoryState {
  state: FieldsType[];
}

const FieldSchema = memo(({ schema, setRootSchema }: IFieldSchema) => {
  const [isDescription, setIsDescription] = useState(false);
  const [history, setHistory] = useState<IHistoryState>({ state: [] });

  const getLastHistorySchema = useCallback(() => {
    if (history.state.length > 1) {
      const modifyHistory = history.state.slice(0, history.state.length - 1);
      const lastElement = modifyHistory[modifyHistory.length - 1];
      setRootSchema({ fields: lastElement });
      setHistory({ state: modifyHistory });
      setIsDescription(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.state]);

  const handleClick = useCallback(
    (value: GraphQLType | GraphQLNamedType) => {
      if ('getFields' in value) {
        const data = value.getFields();

        const modiFyData: IRootSchema = {
          fields: { ...data } as unknown as FieldsType,
        };

        setRootSchema(modiFyData);
        setIsDescription(false);
      } else if (isLeafType(value)) {
        const modiFyData: IRootSchema = {
          fields: { [value.name]: { ...value } } as unknown as FieldsType,
        };
        setRootSchema(modiFyData);
        setIsDescription(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!schema) {
      setIsDescription(false);
    } else {
      const isExist = Object.is(
        history.state[history.state.length - 1],
        schema.fields
      );

      !isExist &&
        setHistory((prevState) => {
          return { ...prevState, state: [...prevState.state, schema.fields] };
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema]);

  console.log('test');

  return (
    <>
      <button
        type="button"
        style={{ border: '1px solid red' }}
        onClick={getLastHistorySchema}
      >
        Go up
      </button>
      <ul className="fieldSchema-container">
        {schema &&
          Object.entries(schema.fields).map(
            ([fieldName, fieldType]: [string, GraphQLOutputType]) => (
              <li key={fieldName} style={{ cursor: 'pointer' }}>
                {isDescription ? (
                  <DetailedField value={fieldType as GraphQLLeafType} />
                ) : (
                  <NextField
                    handleClick={handleClick}
                    fieldName={fieldName}
                    fieldType={fieldType}
                  />
                )}
              </li>
            )
          )}
      </ul>
    </>
  );
});

export default FieldSchema;
