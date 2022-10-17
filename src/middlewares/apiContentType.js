import { BadRequestError } from "../helpers/apiError.js";

export default function (req, res, next) {
  if (
    (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") &&
    !req.is("application/json")
  ) {
    next(new BadRequestError("Request body must be of type json"));
  } else {
    next();
  }
}
