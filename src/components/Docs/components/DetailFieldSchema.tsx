import { GraphQLObjectType } from 'graphql';

interface IDetailFieldSchema {
  value: GraphQLObjectType;
  handleChangeField: (value: GraphQLObjectType) => void;
}

interface MyGraphQLField {
  description?: string;
  name?: string;
}

const DetailFieldSchema = ({
  value,
  handleChangeField,
}: IDetailFieldSchema) => {
  const handleClick = (key: string) => {
    const data = value.getFields();

    const singleField: Partial<Pick<MyGraphQLField, 'description' | 'name'>> = {
      description: data[key].description as string,
      name: data[key]?.name as string,
    };

    handleChangeField(singleField as GraphQLObjectType);
  };

  if (typeof value?.getFields === 'function') {
    const data = value.getFields();

    return (
      <ul>
        {data &&
          Object.entries(data).map(([keys]) => (
            <li key={keys} style={{ margin: '2rem' }}>
              <button onClick={() => handleClick(keys)}>{keys}</button>
            </li>
          ))}
      </ul>
    );
  }
};

export default DetailFieldSchema;
