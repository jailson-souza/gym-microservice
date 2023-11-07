export function skipTake(page?: string | number, limit?: string | number) {
  const _page = Number(page);
  const _limit = Number(limit);
  const skipTakeObject = { skip: 0, take: 100 };

  if (_limit < 1) {
    skipTakeObject.take = 1;
  }

  if (_limit < 100) {
    skipTakeObject.take = _limit;
  }

  if (_page > 1) {
    skipTakeObject.skip = (_page - 1) * _limit;
  }

  return skipTakeObject;
}
