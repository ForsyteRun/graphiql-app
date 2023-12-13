import { GraphQLLeafType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

function isNonNull<T>(value: T): boolean {
  return value !== null && value !== undefined;
}
const DetailedField = ({ value }: { value: GraphQLLeafType }) => {
  const { name, description } = value;

  const renderDetailItem = <T extends string>(value: Maybe<T>, key: string) => {
    if (isNonNull(value)) {
      return (
        <div className={`docs-details__${key}`} key={key}>
          {key}: <span>{value}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="docs-details">
      {renderDetailItem(name, 'type')}
      {renderDetailItem(description, 'description')}
    </div>
  );
};

export default DetailedField;