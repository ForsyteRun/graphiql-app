const DetailedField = ({ value }: { value: string }) => {
  if (typeof value === 'string') {
    return <div>{value}</div>;
  }
};

export default DetailedField;
