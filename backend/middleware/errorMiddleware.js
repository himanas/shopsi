const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = ree.message;

  if (err.name === "CastError" && err.kind === "objectId") {
    message = `Resource Not Found!`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stacl: process.env.NODE_ENV === "production" ? "xxx" : err.stack,
  });
};

export { notFound, errorHandler };
