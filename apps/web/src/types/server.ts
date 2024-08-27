export type ApiResponse = {
  success: boolean;
  message: string;
};
export type ApiResponseData<TData = unknown> = {
  success: boolean;
  message: string;
  data: TData;
};

export type ApiError = {
  success: false;
  message: string;
  error?: string;
};
