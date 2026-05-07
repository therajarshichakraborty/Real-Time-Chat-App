class ApiError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: unknown[];

  constructor(statusCode: number, message: string, errors: unknown[] = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
