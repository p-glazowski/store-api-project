function changeFiltersToMongo(query) {
  const operators = {
    '>': '$gt',
    '>=': '$gte',
    '<': '$lt',
    '<=': '$lte',
    '=': '$eq',
  };

  if (!query) {
    return {};
  }

  const match = query
    .trim()
    .match(/^(price|rating)\s*(>=|<=|>|<|=)\s*(-?\d+(?:\.\d+)?)$/);

  if (!match) {
    return {};
  }

  const [, field, operator, value] = match;

  return {
    [operators[operator]]: Number(value),
  };
}

module.exports = changeFiltersToMongo;
