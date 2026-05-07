export function buildQuery(model, queryParams, searchFields = []) {
  const page = Math.max(Number(queryParams.page) || 1, 1);
  const limit = Math.min(Math.max(Number(queryParams.limit) || 12, 1), 100);
  const skip = (page - 1) * limit;
  const filter = {};

  if (queryParams.category) filter.category = queryParams.category;
  if (queryParams.status) filter.status = queryParams.status;
  if (queryParams.search && searchFields.length) {
    filter.$or = searchFields.map((field) => ({ [field]: { $regex: queryParams.search, $options: 'i' } }));
  }

  const sort = queryParams.sort || '-createdAt';
  return {
    filter,
    page,
    limit,
    query: model.find(filter).sort(sort).skip(skip).limit(limit)
  };
}
