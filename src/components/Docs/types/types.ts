export const isNonNull = <T>(value: T): boolean => {
  return value !== null && value !== undefined;
};
