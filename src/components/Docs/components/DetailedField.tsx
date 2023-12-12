import { GraphQLObjectType } from 'graphql';

const DetailedField = ({ value }: { value: GraphQLObjectType }) => {
  const { name, description } = value;
  return (
    <>
      <div>name: {name}</div>
      <div>description: {description}</div>;
    </>
  );
};

export default DetailedField;
