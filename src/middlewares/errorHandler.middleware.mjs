import createError from "http-errors";

export const notFoundHandler = () => {
  throw createError.NotFound();
};

export const errorHandler = (err, req, res, next) => {
  let { status, message, errors } = err;
  res.status(status || 500).json({
    message: message,
    errors: errors
  });
};

export default errorHandler;
