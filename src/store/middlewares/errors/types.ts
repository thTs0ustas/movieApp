export interface ErrorData {
  error: string;
  message: string;
  retryAfter?: string;
}

export interface ErrorResponse {
  status: string;
  data: ErrorData;
  message: string;
  code: number;
}
