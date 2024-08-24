import { AxiosError } from "axios";

export const axiosErrorHandler = (error: AxiosError) => {
  if (error.response) {
    return error.response.data;
  } else if (error.request) {
    return error.request;
  } else {
    return { status: "error", message: error.message, success: false };
  }
};

export const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    return axiosErrorHandler(error);
  } else if (error instanceof Error) {
    return { status: "error", message: "Something went wrong. Please try again.", success: false };
  }
};

export class ErrorHandler {
  constructor(error: unknown) {
    const { status, message, success } = errorHandler(error);
    return { status, message, success };
  }
}
