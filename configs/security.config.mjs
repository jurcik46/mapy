import createError from "http-errors";
const _corsOriginWhitelist = [
  "https://cdpn.io",
  "https://s.codepfen.io",
  "http://localhost:5000",
  "http://172.18.0.3"
];

export const corsOption = {
  origin: function(origin, callback) {
    if (_corsOriginWhitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(createError.Unauthorized("Unauthorized by CORS"));
    }
  }
};

export const rateLimitOption = {
  windowMs:
    process.env.RATE_LIMIT_TIMEOUT_MINITS *
    process.env.RATE_LIMIT_TIMEOUT_SECONDS *
    process.env.RATE_LIMIT_TIMEOUT_MILISECONDS,
  max: process.env.RATE_LIMIT_MAX_COUNT,
  message: "Too many requests"
};
