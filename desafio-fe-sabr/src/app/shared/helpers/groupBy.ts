export function groupBy<T>(
  array: T[],
  key: (item: T) => string
): Record<string, T[]> {
  return array.reduce((result, currentValue) => {
    const groupKey = key(currentValue);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentValue);
    return result;
  }, {} as Record<string, T[]>);
}
