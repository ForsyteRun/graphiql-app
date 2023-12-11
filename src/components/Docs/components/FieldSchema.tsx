import { ObjMap } from 'graphql/jsutils/ObjMap';
import { GraphQLNamedType, GraphQLObjectType } from 'graphql/type';
import { memo } from 'react';
import DetailFieldSchema from './DetailFieldSchema';

interface IFieldSchema {
  root?: boolean;
  data: ObjMap<GraphQLNamedType>;
  isRootSchema: boolean;
  handleChangeField: (value: GraphQLObjectType) => void;
}
const FieldSchema = memo(
  ({ data, isRootSchema, handleChangeField }: IFieldSchema) => {
    const handleClick = (key: string) => {
      handleChangeField(data[key] as GraphQLObjectType);
    };

    const rootSchema = Object.entries(data) as [string, GraphQLObjectType][];
    let rootKeys: string[] = [];

    rootSchema.forEach((obj: [string, GraphQLObjectType]) => {
      const [key] = obj;
      if (key.includes('_')) {
        return;
      }
      rootKeys = [...rootKeys, key];
    });

    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            justifyContent: 'flex-start',
          }}
        >
          {/* {!root && <div>Field name: {data?.name}2</div>}
          {!root && <div>Field description: {data?.description}</div>} */}
          {/* {!root && typeof value?.getFields === 'function' && (
            <>
              <span>Fields:</span>
              <ul>
                {Object.entries(value.getFields()).map(([key, value]) => (
                  <li key={key}>{key}</li>
                ))}
              </ul>
            </>
          )} */}
          {rootKeys.map((key) => (
            <button key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}
          {!isRootSchema &&
            rootKeys.map((key: string) => (
              <DetailFieldSchema
                key={key}
                value={data[key] as GraphQLObjectType}
                handleChangeField={handleChangeField}
              />
            ))}
        </div>
      </>
    );
  }
);

export default FieldSchema;
