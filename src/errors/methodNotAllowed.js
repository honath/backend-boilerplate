function methodNotAllowed(req, res, next) {
  const method = req.method;

  next({
    status: 405,
    message: `${method} not allowed for ${req.originalUrl}`,
  });
}

module.exports = methodNotAllowed;
