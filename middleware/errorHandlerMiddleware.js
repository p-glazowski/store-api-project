function errorHandlerMiddleware(err, req, res, next) {
  console.log('Thjis yo err from handler:', err);
  return res.status(400).json({ msg: err.message });
}

module.exports = errorHandlerMiddleware;
