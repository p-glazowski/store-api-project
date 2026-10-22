function notFoundPageMiddleware(req, res) {
  return res
    .status(404)
    .send(`${req.method} ${req.originalUrl} page not found`);
}

module.exports = notFoundPageMiddleware;
