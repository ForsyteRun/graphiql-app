export function isNonNull<T>(value: T): boolean {
  return value !== null && value !== undefined;
}
