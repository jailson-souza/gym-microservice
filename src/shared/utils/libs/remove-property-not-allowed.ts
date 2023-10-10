export function removePropertyNotAllowed<T = Object>(
  object: T,
  allowedProperties: string[],
) {
  for (const key in object) {
    if (!allowedProperties.includes(key)) {
      Reflect.deleteProperty(object as Object, key);
    }
  }
  return object;
}
