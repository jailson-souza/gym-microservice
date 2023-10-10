import * as short from 'short-uuid';

export function genShortUUID() {
  return short.generate();
}
