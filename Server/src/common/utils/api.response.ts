class ApiResponse<T> {
  public statusCode: number;
  public success: boolean;
  public message: string;
  public data: T | null;

  constructor(
    statusCode: number,
    message = "Success",
    data: T | null = null,
  ) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;