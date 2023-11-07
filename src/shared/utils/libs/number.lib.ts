export function numberOrNull(value: string | number) {
  const _value = Number(value);
  if (isNaN(_value)) {
    return null;
  }
  return _value;
}
