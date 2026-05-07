class ApiError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: unknown[];
  
  constructor(
    statusCode: number,
    message: string,
    errors: unknown[] = [],
    stack?: string
  ) {

    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;

    Object.setPrototypeOf(this, ApiError.prototype);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(
    message = "Bad Request",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(400, message, errors);
  }

  static unauthorized(
    message = "Unauthorized",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(401, message, errors);
  }

  static forbidden(
    message = "Forbidden",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(403, message, errors);
  }

  static notFound(
    message = "Resource Not Found",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(404, message, errors);
  }

  static conflict(
    message = "Conflict",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(409, message, errors);
  }

  static internal(
    message = "Internal Server Error",
    errors: unknown[] = []
  ): ApiError {
    return new ApiError(500, message, errors);
  }
}

export default ApiError;
