export type ApiResponse<TData = Record<string, unknown>> = {
  success: boolean;
  message: string;
  data?: TData;
};

export type ApiError = {
  success: false;
  message: string;
  error?: string;
};
