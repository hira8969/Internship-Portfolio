export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse({ body: req.body, params: req.params, query: req.query });
  if (!result.success) {
    const error = new Error('Validation failed');
    error.statusCode = 422;
    error.errors = result.error.flatten();
    return next(error);
  }
  req.validated = result.data;
  next();
};
