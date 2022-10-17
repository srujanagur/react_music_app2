import logger from "../util/logger.js";

export default function (error, req, res, next) {
  if (error.source) {
    // logger.error(error.source);
    res.status(200).json({
      status: "error",
      statusCode: 200,
      message: "my message",
    });
  }
}
